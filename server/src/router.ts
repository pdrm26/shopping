import { Application, Request, Response } from 'express'
import usersRouter from './components/user/usersRouter'

export default class Router {
    private app: Application
    constructor(app: Application) {
        this.app = app
    }

    public run() {
        this.app.use('/api/v1', usersRouter)
    }
}
