import { Request, Response } from 'express'

type SocialProfileType = 'facebook' | 'google'

type QueueName = 'order' | 'payment' | 'last logged in'

type AuthRequest = Request & {
  user?: {
    sub: string
    iat: number
    exp: number
    appId: string
    memberId: string
    name: string
    username: string
    email: string
    pictureUrl: string
    role: string
  }
}
type ResponseCode =
  | 'SUCCESS'
  | 'E_UNKNOWN'
  | 'E_INPUT'
  | 'E_NO_MEMBER'
  | 'E_NO_APP_HOST'
  | 'E_NO_ORDER'
  | 'E_NO_PAYMENT'
  | 'E_NO_EMAIL'
  | 'E_PASSWORD'
  | 'E_EMAIL_EXISTS'
  | 'E_USERNAME_EXISTS'
  | 'E_PROVIDER'
  | 'E_PROVIDER_TOKEN'
  | 'E_UNAUTHORIZED'
  | 'E_DATA_NOT_SET'
  | 'E_SEND_EMAIL'
  | 'E_UPDATE_PASSWORD'
  | 'E_CHECKOUT_ORDER'
  | 'E_MPG_SERVICE'
  | 'E_SPGATEWAY_NOTIFY'
  | 'E_UPDATE_ORDER_STATUS'
  | 'E_LOGOUT'
  | 'E_ISSUE_INVOICE'
  | 'E_NO_PAYMENT_METHOD'
  | 'E_INVALID_PAYMENT_METHOD'
  | 'E_PAY_TPCLIENT'
  | 'E_SIGN_URL'
  | 'E_ZOOM_SECRET'
  | 'E_LIST_ZOOM_USER'
  | 'E_HANDLE_TRIGGER'
  | 'E_HANDLE_ACTION'
  | 'E_GET_MEMBER'
  | 'E_REGISTER_MEMBER'
  | 'E_PAYMENT_GATEWAY'

type ApiResponse = Response<{
  code: ResponseCode
  message: string
  result: any
}>
type ActionResponse = Response<{
  code: ResponseCode
  message: string
}>
