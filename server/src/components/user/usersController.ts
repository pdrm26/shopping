import { Request, Response } from 'express'
import Mongo from '../../../infrastructure/connection/mongodb'

const newUser = {
    first_name: 'John',
    last_name: 'Doe',
    mobile: '1234567890',
    email: 'john.doe@example.com',
}

export default class UsersController {
    static getAllUsers(req: Request, res: Response) {
        res.status(200).send({ allUsers: [] })
    }
    static async createUser(req: Request, res: Response) {
        const collection = Mongo.db().collection('users')

        const result = await collection.insertOne(newUser)
        if (result.acknowledged) {
            return res.status(200).send({ status: 200 })
        }
    }
}
