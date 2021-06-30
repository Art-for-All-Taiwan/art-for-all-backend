import mailgun from 'mailgun-js'

const mgService =
  process.env.MAILGUN_API_KEY && process.env.MAILGUN_DOMAIN
    ? mailgun({
        apiKey: process.env.MAILGUN_API_KEY,
        domain: process.env.MAILGUN_DOMAIN,
      })
    : null

export default mgService
