
require('dotenv').config()
const express = require('express')
const workouts=require('./routes/workouts')

const app = express()

app.listen(process.env.PORT, ()=>{
    console.log(`application running on port  ${process.env.PORT}`)
})

app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path,req.method)
    console.log("middleware")
    next()
})

app.use('/api/workouts',workouts)

//routes
app.get('/',(req,res)=>{
    res.json({messg: 'welcome to workout-buddy '})
  
})