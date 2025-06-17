require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const { foodItems } = require('./data');

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS


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

        app.get('/insertAllFoods', async (req, res) => {
            const result = await foodsCollection.insertMany(foodItems)
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

        app.get('/foods/my-foods', async (req, res) => {
            const query = req?.query
            const result = await foodsCollection.find(query).toArray()
            res.send(result)
        })

        app.delete('/foods/my-foods', async (req, res) => {
            const id = req?.query?.id
            const query = { _id: new ObjectId(id) }
            const result = await foodsCollection.deleteOne(query)
            res.send(result)
        })

        app.put('/foods/my-foods', async (req, res) => {
            const id = req?.query?.id
            const { _id, ...food } = req.body

            const query = { _id: new ObjectId(id) }
            const update = { $set: food }
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