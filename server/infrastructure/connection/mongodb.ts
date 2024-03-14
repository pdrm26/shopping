import { MongoClient } from 'mongodb'

const MONGO_URI = `${process.env.MONGO_HOST}:${process.env.MONGO_PORT}`

async function run() {
    const client = new MongoClient(`mongodb://${MONGO_URI}`)
    console.log(`Try connecting to mongodb://${MONGO_URI}`)
    await client.connect().then((res) => console.log('SUCCESSFULLY CONNECT TO THE MONGO'))
    const db = client.db(process.env.MONGO_DB)
}

run()
