import authService from "../services/auth.service.js";


class AuthRouterController {
    constructor() {
        this.auth = this.auth.bind(this)
    }

    async auth(req, res, next) {
        const payload = req.body
        try {
            res.status(201).json(await authService.auth(payload))
        } catch (error) {
            console.error(`Error while authenticating user`, error.message);
            next(error)   
        }
    }
}

export default new AuthRouterController()