import { Router } from 'express'
import usersController from './usersController'

const usersRouter = Router()

usersRouter.get('/', usersController.getAllUsers)

export default usersRouter
