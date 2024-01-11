
const Workout= require('../models/workoutModel')

const {createWorkout,getWorkouts} = require('../controllers/workoutController')

const express=require('express')

const router=express.Router()

//get api for listing out all the objects
router.get('/',getWorkouts)
//     console.log(`workout function is working`)
//     res.json({mssg: `workout function is working`})
// })

//get 
router.get('/:id',(req,res)=>{
  
    res.json({mssg: `workout function with single workout`})
})

router.delete('/:id',(req,res)=>{

    res.json({mssg: `Delete the single workout`})
})

router.patch('/:id',(req,res)=>{
   
    res.json({mssg: `patch the single workout`})
})


router.post('/',async(req,res)=>{ 
    const {title,load,reps}= req.body

    try{
        const workout = await Workout.create({title,load,reps})
        res.status(200).json(workout)
    }
    catch(error){ 
        res.status(400).json(error.message)
    }
    
})

module.exports = router

