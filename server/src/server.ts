import Mongo from '../infrastructure/connection/mongodb'
import App from './app'
import { config } from 'dotenv'
config()

new Mongo()
const app = new App(Number(process.env.APP_PORT))

app.start()
