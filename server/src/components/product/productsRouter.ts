import { Router } from 'express'
import ProductsController from './productsController'

const productsRouter = Router()

productsRouter.get('/products', ProductsController.getAllProducts)

export default productsRouter
