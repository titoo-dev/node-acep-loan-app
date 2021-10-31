import express from 'express'
import morgan from 'morgan'
import bureauRouter from './routes/bureau.route.js'
import userRouter from './routes/user.route.js'
import adminRouter from './routes/admin.route.js'
import authRouter from './routes/auth.route.js'
import loanRouter from './routes/loan.route.js'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())

app.use(morgan('dev'))

app.use(express.json())

app.use('/api/bureau', bureauRouter)
app.use('/api/user', userRouter)
app.use('/api/admin', adminRouter)
app.use('/api/auth', authRouter)
app.use('/api/loan', loanRouter)

app.listen(PORT, () => {
    console.log("Listening on localhost:" + PORT);
})