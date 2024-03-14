import { Request, Response } from 'express'

export default class UsersController {
    static getAllUsers(req: Request, res: Response) {
        res.status(200).send({ allUsers: [] })
    }
}
