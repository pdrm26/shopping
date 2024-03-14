import * as mongoose from 'mongoose'

export default async function startMongoose() {
    // Connect to MongoDB
    await mongoose.connect(`mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`)
    console.log('Connect to Mongodb successfully')
}
