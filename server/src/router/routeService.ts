import usersRouter from '../components/user/usersRouter'
import productsRouter from '../components/product/productsRouter'
import RouteEngine from '.'
import { Application } from 'express'

export default class RouteService {
    private router: RouteEngine
    private app: Application

    constructor(app: Application) {
        this.router = new RouteEngine()
        this.app = app
        this.bindRouters()
    }

    private bindRouters() {
        this.router.registerRouter('/api/v1/users', usersRouter)
        this.router.registerRouter('/api/v1/products', productsRouter)
    }

    public run() {
        this.router.getRouters().forEach((router, routeName) => this.app.use(routeName, router))
    }
}
