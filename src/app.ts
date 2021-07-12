import bodyParser from 'body-parser'
import cors, { CorsOptions } from 'cors'
import express from 'express'
import session from 'express-session'
import moment from 'moment'
import redis from 'redis'
import InfoController from './controllers/info.controller'
import errorMiddleware from './middlewares/error.middleware'
import loggerMiddleware from './middlewares/logger.middleware'
import v1Router from './routers/v1'

const app = express()

const RedisStore = require('connect-redis')(session)
const redisClient = redis.createClient({ url: process.env.REDIS_URL })

// add middlewares
const corsOptions: CorsOptions = {
  credentials: true,
  origin: (origin, callback) => {
    // TODO: check the origin in the app
    callback(null, true)
  },
}
app.use(cors(corsOptions))
const sessionConfig: session.SessionOptions = {
  secret: process.env.SESSION_SECRET || 'artforall',
  store: new RedisStore({ client: redisClient }),
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: moment().add(1, 'month').toDate(),
  },
}
if (process.env.NODE_ENV === 'production') {
  app.set('trust proxy', 1)
  if (sessionConfig.cookie) {
    sessionConfig.cookie.sameSite = 'none'
    sessionConfig.cookie.secure = true
  }
}
app.use(session(sessionConfig))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(loggerMiddleware)
app.use(errorMiddleware)

// add routers
app.get('/', InfoController.getInfoHandler)
app.use('/v1', v1Router)

app.use(express.static('public'))

export default app
