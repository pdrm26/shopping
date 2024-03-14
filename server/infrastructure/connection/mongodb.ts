import { Db, MongoClient } from 'mongodb'

export default class Mongo {
    private static client: MongoClient

    constructor() {
        console.log(`Try connecting to mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}`)
        this.connect()
    }

    private async connect() {
        try {
            Mongo.client = await MongoClient.connect(`mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}`)
            console.log('SUCCESSFULLY CONNECTED TO MONGODB')
        } catch (error) {
            console.error('Error connecting to MongoDB:', error)
        }
    }

    static db(): Db {
        if (!Mongo.client) {
            throw new Error('MongoDB client is not connected')
        }
        return Mongo.client.db()
    }
}
