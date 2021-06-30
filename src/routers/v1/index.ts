import { Router } from 'express'
import expressJWT from 'express-jwt'
import authRouter from './auth'

const router = Router()

router.use(
  expressJWT({ secret: process.env.HASURA_JWT_SECRET || 'biodb' }).unless({
    path: [
      '/v1/auth/logout',
      '/v1/auth/register',
      '/v1/auth/general-login',
      '/v1/auth/social-login',
      '/v1/auth/refresh-token',
      '/v1/auth/forgot-password',
    ],
  }),
)

router.use('/auth', authRouter)

export default router
