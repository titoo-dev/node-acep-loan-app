import express from 'express'
import adminController from '../controllers/admin.controller.js'

const adminRouter = express.Router()

adminRouter.get('/', adminController.getAll)
adminRouter.get('/:id', adminController.getOnce)
adminRouter.post('/', adminController.add)
adminRouter.put('/:id', adminController.update)
adminRouter.delete('/:id', adminController.delete)

export default adminRouter