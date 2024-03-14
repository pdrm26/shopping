import { Router } from 'express'
import UsersController from './usersController'

const usersRouter = Router()

usersRouter.get('/', UsersController.getAllUsers)

export default usersRouter
