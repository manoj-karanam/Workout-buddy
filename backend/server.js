
require('dotenv').config()
const express = require('express')
const workouts=require('./routes/workouts')
const mongoose=require('mongoose')

const app = express()

app.use(express.json())

// app.use((req,res,next)=>{
//     console.log(req.path,req.method)
//     console.log("middleware")
//     next()
// })

app.use('/api/workouts',workouts)

//routes
app.get('/',(req,res)=>{
    res.json({messg: 'welcome to workout-buddy '})
})

//connet to DB
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
//listen to requests
    app.listen(process.env.PORT, ()=>{
        console.log(`application running on port  ${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.log(error) 
})