import express, { Application } from 'express'
import Router from './router'
import usersRouter from './components/user/usersRouter'

export default class App {
    public app: Application
    private port: number
    private router: Router

    constructor(port: number) {
        this.app = express()
        this.port = port
        this.router = new Router(this.app)
        this.registerRouters()
    }

    private registerRouters() {
        this.router.registerRouter('/api/v1', usersRouter)
    }

    public start() {
        this.app.listen(this.port, () => console.log(`Server is running on port ${this.port}`))
        this.router.run()
    }
}
