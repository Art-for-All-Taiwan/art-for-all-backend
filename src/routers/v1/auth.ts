import { Router } from 'express'
import { AuthController } from '../../controllers/auth.controller'

const authRouter = Router()

authRouter.post('/register', AuthController.registerHandler)
authRouter.post('/change-password', AuthController.changePasswordHandler)
authRouter.post('/refresh-token', AuthController.refreshTokenHandler)
authRouter.post('/general-login', AuthController.generalLoginHandler)
authRouter.post('/reset-password', AuthController.resetPasswordHandler)
authRouter.post('/forgot-password', AuthController.forgotPasswordHandler)
authRouter.post('/logout', AuthController.logoutHandler)
authRouter.post('/generate-user', AuthController.generateUserHandler)

export default authRouter
