
const Workout= require('../models/workoutModel')

const {createWorkout,getWorkouts,getWorkout,deleteWorkout,updateWorkout} 
= require('../controllers/workoutController')

const express=require('express')

const router=express.Router()

router.get('/',getWorkouts)

router.get('/:id',getWorkout)

router.post('/',createWorkout)

router.delete('/:id',deleteWorkout)

router.patch('/:id',updateWorkout)

module.exports = router

