const cors = require('cors')
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connection = require('./config/db');
const userRouter = require('./routes/user.routes');
const authUser = require('./middlewares/auth.middleware');
const productRouter = require('./routes/product.route');
dotenv.config()
const port = process.env.PORT 

app.use(express.json())
// app.use(cors({ origin: ["http://localhost:5173", "https://mern-practice-4.onrender.com"], credentials: true }));

app.use(cors({
    origin: "https://mern-practice-brown.vercel.app", 
    methods: "GET,POST,PUT,DELETE",
    credentials: true
  }));
app.use('/user', userRouter)
app.use('/product',authUser,productRouter)
 
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