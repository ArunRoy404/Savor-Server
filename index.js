require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const { foodItems } = require('./data');


const app = express()
const port = process.env.PORT || 3000
app.use(cors());
app.use(express.json())

const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS
const FB_SERVICE_KEY = process.env.FB_SERVICE_KEY


const decoded = Buffer.from(FB_SERVICE_KEY, 'base64').toString('utf8')
const serviceAccount = JSON.parse(decoded)


var admin = require("firebase-admin");
// var serviceAccount = require("./firebase-admin-service-key.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});


const uri = `mongodb+srv://${DB_USER}:${DB_PASS}@roy.tqtwhk6.mongodb.net/?retryWrites=true&w=majority&appName=ROY`;
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
});


async function run() {
    try {
        // await client.connect()
        const database = client.db('Savor')
        const foodsCollection = database.collection('foods')
        const purchasedCollection = database.collection('purchased')



        const verifyFirebase = async (req, res, next) => {
            const authorization = req?.headers?.authorization
            const firebaseToken = authorization

            if (!firebaseToken) {
                res.status(401).send({ message: "Unauthorized Access" })
            }
            try {
                const tokenUser = await admin.auth().verifyIdToken(firebaseToken)
                req.tokenUser = tokenUser
                next()
            } catch (error) {
                res.status(401).send({ message: "Invalid Token", error })
            }
        }


        app.get('/insertAllFoods', async (req, res) => {
            const result = await foodsCollection.insertMany(foodItems)
            res.send(result)
        })

        app.get('/food', async (req, res) => {
            const id = req.query.id
            const query = { _id: new ObjectId(id) }
            const result = await foodsCollection.findOne(query)
            if (!result) res.status(404).send({ message: "data not found" })
            res.send(result)
        })
        app.get('/foods', async (req, res) => {
            const searchText = req?.query?.title || ''
            const query = {
                name: { $regex: searchText, $options: 'i' }
            }
            const result = await foodsCollection.find(query).toArray()
            res.send(result)
        })
        app.get('/top-foods', async (req, res) => {
            const options = {
                sort: { "purchaseCount": -1 }
            }
            const result = await foodsCollection.find({}, options).limit(6).toArray()
            res.send(result)
        })
        app.post('/foods', verifyFirebase, async (req, res) => {
            const foodData = req.body
            const email = foodData.ownerEmail
            if (email !== req?.tokenUser?.email) {
                res.status(403).send({ message: "Forbidden Access" })
                console.log("object");
            }
            const result = await foodsCollection.insertOne(foodData)
            res.send(result)
        })



        app.post('/food/purchase', verifyFirebase, async (req, res) => {
            const foodData = req.body
            const email = req.body.buyerEmail
            if (email !== req?.tokenUser?.email) {
                res.status(403).send({ message: "Forbidden Access" })
            }
            const result = await purchasedCollection.insertOne(foodData)
            res.send(result)
        })
        app.get('/my-orders', verifyFirebase, async (req, res) => {
            const email = req?.query?.email
            if (email !== req?.tokenUser?.email) {
                res.status(403).send({ message: "Forbidden Access" })
            }
            const query = { buyerEmail: email }
            const result = await purchasedCollection.find(query).toArray()
            res.send(result)
        })
        app.delete('/my-orders', verifyFirebase, async (req, res) => {
            const id = req?.query?.id
            const { email } = req.body
            if (email !== req?.tokenUser?.email) {
                res.status(403).send({ message: "Forbidden Access" })
            }
            const query = { _id: new ObjectId(id) }
            const result = await purchasedCollection.deleteOne(query)
            res.send(result)
        })



        app.get('/foods/my-foods', verifyFirebase, async (req, res) => {
            const email = req?.query?.ownerEmail
            if (email !== req?.tokenUser?.email) {
                res.status(403).send({ message: "Forbidden Access" })
            }
            const query = req?.query
            const result = await foodsCollection.find(query).toArray()
            res.send(result)
        })
        app.delete('/foods/my-foods', verifyFirebase, async (req, res) => {
            const id = req?.query?.id
            const { email } = req.body
            if (email !== req?.tokenUser?.email) {
                res.status(403).send({ message: "Forbidden Access" })
            }
            const query = { _id: new ObjectId(id) }
            const result = await foodsCollection.deleteOne(query)
            res.send(result)
        })
        app.put('/foods/my-foods', verifyFirebase, async (req, res) => {
            const id = req?.query?.id
            const { _id, ...food } = req.body

            const email = food.ownerEmail
            if (email !== req?.tokenUser?.email) {
                res.status(403).send({ message: "Forbidden Access" })
                console.log("object");
            }

            const query = { _id: new ObjectId(id) }
            const update = { $set: food }
            const options = { upsert: true }
            const result = await foodsCollection.updateOne(query, update, options)
            res.send(result)
        })
        app.put('/food/stock', async (req, res) => {
            const id = req?.query?.id
            const { stock, purchaseCount } = req.body

            const query = { _id: new ObjectId(id) }
            const update = {
                $set: { quantity: stock, purchaseCount }
            }
            const options = { upsert: true }
            const result = await foodsCollection.updateOne(query, update, options)
            res.send(result)
        })



        // await client.db('admin').command({ ping: 1 })
        // console.log("Pinged your deployment. You successfully connected to MongoDB!");
    }
    finally {

    }
}
run().catch(console.dir)

app.get('/', (req, res) => {
    res.send("Savor Server Running!")
})

app.listen(port, () => {
    console.log(`app is listening on port: ${port}`)
})