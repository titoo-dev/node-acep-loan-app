import express from 'express'
import bureauController from '../controllers/bureau.controller.js'
const bureauRouter = express.Router()

bureauRouter.get('/', bureauController.getAll)

export default bureauRouter