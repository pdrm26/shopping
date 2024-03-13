import { Application, Request, Response, Router } from 'express'

export default class RouterEngine {
    private app: Application
    private routers: Map<string, Router> = new Map<string, Router>()
    constructor(app: Application) {
        this.app = app
    }

    public registerRouter(routeName: string, router: Router) {
        this.routers.set(routeName, router)
    }

    public run() {
        this.routers.forEach((router, routeName) => this.app.use(routeName, router))
    }
}
