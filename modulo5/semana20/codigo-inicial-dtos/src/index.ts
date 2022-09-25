import express from 'express'
import cors from 'cors'
import dotenv from "dotenv"
import { userRouter } from './router/userRouter'

dotenv.config()

const app = express()

// middleware
app.use(express.json())
app.use(cors())

// middleware
// http://localhost:3003/users = URL BASE
app.use("/users", userRouter)

app.listen(process.env.PORT || 3003, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
})
