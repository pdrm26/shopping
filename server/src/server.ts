import App from './app'
import { config } from 'dotenv'

config()
const app = new App(Number(process.env.APP_PORT))

app.start()
