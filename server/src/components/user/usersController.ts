import { Request, Response } from 'express'
import Mongo from '../../../infrastructure/connection/mongodb'

const newUser = {
    first_name: 'John',
    last_name: 'Doe',
    mobile: '1234567890',
    email: 'john.doe@example.com',
}

export default class UsersController {
    static async getAllUsers(req: Request, res: Response) {
        try {
            const allUsers = await Mongo.getDb().collection('users').find({}).toArray()
            res.status(200).send({ allUsers })
        } catch (error: any) {
            res.status(500).send(error.messsage)
        }
    }

    static async createUser(req: Request, res: Response) {
        const collection = Mongo.getDb().collection('users')

        try {
            const result = await collection.insertOne(newUser)
            return res.status(200).send({ status: 200, user: result })
        } catch (err) {
            console.log('Error to create the user: ', err)
            return res.status(500).send({ error: err })
        }
    }
}
