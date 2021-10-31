import express from 'express'
import loanController from '../controllers/loan.controller.js'

const loanRouter = express.Router()

userRouter.get('/', loanController.getAll)
userRouter.get('/:id', loanController.getOnce)
userRouter.post('/', loanController.add)
userRouter.put('/:id', loanController.update)
userRouter.delete('/:id', loanController.delete)

export default loanRouter