import { RequestHandler } from 'express'

class InfoController {
  public static getInfoHandler: RequestHandler = async (req, res) => {
    res.send('Current endpoint: /v1')
  }
}
export default InfoController
