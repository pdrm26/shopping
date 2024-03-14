import { config as loadEnvironmentsVars } from 'dotenv'
import App from './app'
import startMongoose from '../infrastructure/connection/mongoose'

loadEnvironmentsVars()
startMongoose()

const app = new App(Number(process.env.APP_PORT))
app.start()
