import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import userRouter from './routes/users.js'
import dotenv from "dotenv";
import questionRoutes from './routes/Questions.js'
import answerRoutes from    './routes/Answers.js'

dotenv.config();

const app = express();
app.use(express.json({ limit: "30mb", extended: true }))
app.use(express.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())



app.get('/', (req, res) => {
    res.send('this is test api')
})

app.use('/user', userRouter)
app.use('/questions', questionRoutes)
app.use('/answer', answerRoutes)




const PORT = process.env.PORT || 8000

const CONNECTION_URL = "mongodb+srv://admin:admin@devoloper-server.ubqoweb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => { console.log(`server running on port ${PORT}`) }))
    .catch((err) => console.log(err.message))