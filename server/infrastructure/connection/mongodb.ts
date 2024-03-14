import { Db, MongoClient, MongoServerError } from 'mongodb'
import userSchema from '../../src/components/user/model/User'

export default class Mongo {
    static client: MongoClient

    constructor() {
        console.log(`Try connecting to mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}`)
        this.connect()
    }

    private async connect() {
        try {
            Mongo.client = new MongoClient(`mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}`)

            await Mongo.client.connect()
            await this.registerCollection('users', userSchema)

            console.log('SUCCESSFULLY CONNECTED TO MONGODB')
        } catch (error) {
            console.error('Error connecting to MongoDB:', error)
        }
    }

    private async registerCollection(collectionName: string, schema: { $jsonSchema: object }) {
        const db = Mongo.getDb()

        await db
            .command({
                collMod: collectionName,
                validator: schema,
            })
            .catch(async (error: MongoServerError) => {
                if (error.codeName === 'NamespaceNotFound') {
                    await db.createCollection(process.env.USERS_COLLECTION_NAME!, {
                        validator: schema,
                    })
                }
            })
    }

    static getDb(): Db {
        if (!Mongo.client) {
            throw new Error('MongoDB client is not connected')
        }
        return Mongo.client.db(process.env.MONGO_DB)
    }
}
