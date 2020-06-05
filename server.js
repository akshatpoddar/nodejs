const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const PORT = 5050
require('dotenv/config')
const app = express()
app.use(cors())
app.use(bodyParser.json())
const userRoutes = require('./Routes/users')

app.get('/',(req,res)=>{
    res.send("Welcome to HomePage")
})

app.use('/user',userRoutes)

mongoose.connect(process.env.URL,{ useNewUrlParser:true, useUnifiedTopology: true }, ()=> {
    console.log("Connected to DB")
})

app.listen(PORT, () =>{
    console.log(`Server running on PORT ${PORT}`)
})