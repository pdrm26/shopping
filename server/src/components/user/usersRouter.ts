import { Router } from 'express'
import UsersController from './usersController'

const usersRouter = Router()

usersRouter.get('/', UsersController.getAllUsers)
usersRouter.post('/create', UsersController.createUser)

export default usersRouter
