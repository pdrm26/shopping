import express, { Application } from 'express'
import RouteService from './router/routeService'

export default class App {
    public app: Application
    private port: number
    private router: RouteService

    constructor(port: number) {
        this.app = express()
        this.port = port
        this.router = new RouteService(this.app)
    }

    public start() {
        this.app.use(express.json())
        this.app.listen(this.port, () => console.log(`Server is running on port ${this.port}`))
        this.router.run()
    }
}
