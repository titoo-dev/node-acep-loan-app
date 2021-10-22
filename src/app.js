import express from 'express'
import morgan from 'morgan'
import bureauRouter from './routes/bureau.route.js'

const app = express()
const PORT = process.env.PORT || 3000

app.use(morgan('dev'))

app.use(express.json())

app.use('/api/bureau', bureauRouter)

app.listen(PORT, () => {
    console.log("Listening on localhost:" + PORT);
})