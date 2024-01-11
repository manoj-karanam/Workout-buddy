const Workout=require('../models/workoutModel')

// get all the elements from DB
const getWorkouts = async(req,res)=>{
    const workouts= await Workout.find({}).sort({createdAt: -1})
    res.status(200).json(workouts)

}
//get single element

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

//update the element


module.exports={
    createWorkout,
    getWorkouts 
    
}