import { NextFunction, Request, Response } from 'express'

const errorMiddleware = (error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error) {
    console.log(error)
    return res.send({ code: 'E_UNKNOWN', message: error.message, result: null })
  }
  console.log(error)
  next(error)
}

export default errorMiddleware
