import { Request, Response } from 'express'

export default class usersController {
    static getAllUsers(req: Request, res: Response) {
        res.status(200).send({ allUsers: [] })
    }
}
