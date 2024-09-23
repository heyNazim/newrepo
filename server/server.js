import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import router from './routes/userRoute.js'
import connectDb from './config/Db.js'
import blogrouter from './routes/blogRoute.js'

const app = express()
app.use(cors())

app.use(express.json())

dotenv.config()

connectDb();

app.use('/api', router)
app.use('/api', blogrouter)





const port = 8080;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})