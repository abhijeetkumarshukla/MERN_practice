const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connection = require('./config/db');
const userRouter = require('./routes/user.routes');
const authUser = require('./middlewares/auth.middleware');
dotenv.config()
const port = process.env.PORT 

app.use(express.json())
app.use('/user', userRouter)

app.get('/' , (req,res)=>{
    res.status(201).json({message:'hello mern'})
})

app.listen(port,async()=>{
    try {
        await connection
        console.log(`server is running on port ${port} and DB is connected`)
    } catch (error) {
        console.log(error)
    }
})