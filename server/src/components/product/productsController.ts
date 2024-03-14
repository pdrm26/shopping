import { Request, Response } from 'express'

export default class ProductsController {
    static getAllProducts(req: Request, res: Response) {
        res.status(200).send({ allProductss: [] })
    }
}
