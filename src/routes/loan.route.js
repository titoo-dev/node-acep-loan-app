import express from 'express'
import loanController from '../controllers/loan.controller.js'

const loanRouter = express.Router()

loanRouter.get('/', loanController.getAll)
loanRouter.get('/:id', loanController.getOnce)
loanRouter.get('/loan/:id', loanController.getById)
loanRouter.post('/', loanController.add)

export default loanRouter