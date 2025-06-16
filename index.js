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

        app.get('/insertAllFoods', async (req, res)=>{
            const result = await foodsCollection.insertMany(foodItems)
            res.send(result)
        })

        app.get('/foods', async (req, res) => {
            const result = await foodsCollection.find().toArray()
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