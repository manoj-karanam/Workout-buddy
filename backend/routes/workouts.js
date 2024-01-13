
const Workout= require('../models/workoutModel')

const {createWorkout,getWorkouts,getWorkout} = require('../controllers/workoutController')

const express=require('express')

const router=express.Router()

//get api for listing out all the objects
router.get('/',getWorkouts)

router.get('/:id',getWorkout)

router.post('/',createWorkout)

router.delete('/:id',(req,res)=>{

    res.json({mssg: `Delete the single workout`})
})

router.patch('/:id',(req,res)=>{
   
    res.json({mssg: `patch the single workout`})
})



    


module.exports = router

