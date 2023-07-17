const express = require('express');
require('dotenv').config();

const connection = require('./config/config')
const {userRouter} = require('./routes/user.route')
const {quizRouter} = require('./routes/quiz.route');

const app = express();
const PORT = process.env.PORT;

app.use(express.json())
app.use("/user",userRouter);
app.use("/quiz",quizRouter);

app.get('/', (req, res) =>{
    res.send("Welcome to Home Page")
})

app.listen(PORT, async(req,res)=>{
    try{
        await connection;
        console.log('DB is connected');
    } catch(err){
        console.log(err.message);
    }
    console.log(`server is running on port ${process.env.PORT}`);
})