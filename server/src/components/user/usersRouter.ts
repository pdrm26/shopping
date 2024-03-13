import { Router } from 'express'
import usersController from './usersController'

const usersRouter = Router()

usersRouter.get('/users', usersController.getAllUsers)


export default usersRouter
