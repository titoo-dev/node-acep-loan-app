import express from 'express'
import loanController from '../controllers/loan.controller.js'

const loanRouter = express.Router()

loanRouter.get('/', loanController.getAll)
loanRouter.get('/:id', loanController.getOnce)
loanRouter.get('/user/:id', loanController.getById)
loanRouter.post('/', loanController.add)
loanRouter.put('/:id', loanController.update)

export default loanRouter