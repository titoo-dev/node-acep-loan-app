import express from 'express'
import userController from '../controllers/user.controller.js'

const userRouter = express.Router()

userRouter.get('/', userController.getAll)
userRouter.get('/:id', userController.getOnce)
userRouter.post('/', userController.add)
userRouter.put('/:id', userController.update)
userRouter.delete('/:id', userController.delete)

export default userRouter