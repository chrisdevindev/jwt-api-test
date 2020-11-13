import { Request, Response } from 'express'

class UserController {
    store(req: Request, res: Response) {
        return res.send('ok')
    }
}

export default new UserController()