import { Router } from 'express'
import ProductsController from './productsController'

const productsRouter = Router()

productsRouter.get('/', ProductsController.getAllProducts)

export default productsRouter
