const { default: mongoose, mongo } = require('mongoose')
const Workout=require('../models/workoutModel')

// get all the elements from DB

const getWorkouts = async(req,res)=>{
    const workouts= await Workout.find({}).sort({createdAt: -1})
    res.status(200).json(workouts)
}

//get single element
const getWorkout = async(req,res)=>{

    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({Message: "The specified id doesn't exist"})
    }
    const workout= await Workout.findById(id)
    
    if(!workout){
       return res.status(404).json({Message: "The specified id doesn't exist"})
    }

    res.status(200).json(workout)
}

//Add new element
const createWorkout = async(req,res)=>{
    const {title,load,reps}= req.body

    try{
        const workout = await Workout.create({title,load,reps})
        res.status(200).json(workout)
    }
    catch(error){ 
        res.status(400).json(error.message)
    }
}
//delete the element

const deleteWorkout= async (req,res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({"Message": "The Id is not valid"})
    }

    const workout= await Workout.findByIdAndDelete({_id:id})

    if(!workout){
        return res.status(400).json({"Message": "The Id is not valid"})
    }

    return res.status(200).json(workout)
}

//update the element
const updateWorkout= async (req,res)=>{
    const {id} = req.params
    

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({"Message": "The Id is not valid"})
    }

    const workout= await Workout.findOneAndUpdate({_id:id},{
        ...req.body
    })

    if(!workout){
        return res.status(400).json({"Message": "No Such workout"})
    }

    return res.status(200).json(workout)
}

module.exports={
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout 
}