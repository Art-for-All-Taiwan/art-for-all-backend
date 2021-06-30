class HttpError extends Error {}

class BadRequestError extends HttpError {
  statusCode = 400
}
class ProviderError extends BadRequestError {
  constructor() {
    super('provider 不支援')
  }
}
class SignError extends BadRequestError {
  constructor() {
    super('無法簽署 URL')
  }
}
export { BadRequestError, ProviderError, SignError }

class UnauthorizedError extends HttpError {
  statusCode = 401
}
class PasswordError extends UnauthorizedError {
  constructor() {
    super('密碼錯誤')
  }
}
class TokenError extends UnauthorizedError {
  constructor() {
    super('token 錯誤')
  }
}
export { UnauthorizedError, PasswordError, TokenError }

class NotFoundError extends HttpError {
  statusCode = 404
}
class NoUserError extends NotFoundError {
  constructor() {
    super('找不到使用者')
  }
}
export { NotFoundError, NoUserError }

class ConflictError extends HttpError {
  statusCode = 409
}
class UserNameOrEmailExistError extends ConflictError {
  constructor() {
    super('使用者名稱或信箱已經存在')
  }
}
export { ConflictError, UserNameOrEmailExistError }

class InternalServerError extends HttpError {
  statusCode = 500
}
class GraphQLError extends InternalServerError {
  constructor() {
    super('未預期錯誤')
  }
}
export { InternalServerError, GraphQLError }
