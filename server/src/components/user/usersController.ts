import { Request, Response } from 'express'
import Mongo from '../../../infrastructure/connection/mongodb'

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
            const result = await collection.insertOne(req.body)
            return res.status(200).send({ status: 200, result })
        } catch (err) {
            console.log('Error to create the user: ', err)
            return res.status(500).send({ error: err })
        }
    }
}
