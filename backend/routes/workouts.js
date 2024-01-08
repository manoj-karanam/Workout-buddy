
const express=require('express')

const router=express.Router()

//get api for listing out all the objects
router.get('/',(req,res)=>{
    console.log(`workout function is working`)
    res.json({mssg: `workout function is working`})
})

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


router.post('/',(req,res)=>{
    res.json({mssg: `Workout Post function`})
})

module.exports = router

