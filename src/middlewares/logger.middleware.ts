import { RequestHandler } from 'express'

const loggerMiddleware: RequestHandler = (req, res, next) => {
  console.log('Request logged:', req.method, req.path)
  next()
}

export default loggerMiddleware
