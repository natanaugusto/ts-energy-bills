import { type Server } from 'http'
import express from 'express'
import bodyParser from 'body-parser'
import config from 'config'
import router from '@/controllers'

const app = express()
app.use(bodyParser.json())
app.use(router)

let server: Server = app.listen(config.get('Express.port'))
export { app, server }
