import { Request, Response } from 'express'
import User from './model/User'

export default class UsersController {
    static async getAllUsers(req: Request, res: Response) {
        try {
            const allUsers = await User.find({})
            res.status(200).send({ allUsers })
        } catch (error: any) {
            res.status(500).send(error.messsage)
        }
    }

    static async createUser(req: Request, res: Response) {
        try {
            const newUser = await User.create(req.body)
            return res.status(200).send({ status: 200, result: newUser })
        } catch (err) {
            console.log('Error to create the user: ', err)
            return res.status(500).send({ error: err })
        }
    }
}
