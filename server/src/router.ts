import { Application, Request, Response } from 'express'

export default class Router {
    private app: Application
    constructor(app: Application) {
        this.app = app
    }

    public run() {
        this.app.get('/', (req: Request, res: Response) => res.send('Hi i am from the router file (;'))
    }
}
