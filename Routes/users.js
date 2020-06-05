const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const express = require('express')
const router = express.Router()
const Users = require("../Models/user.model")

router.get('/', async (req,res)=>{
    try{
        const users =await Users.find()
        res.json(users)
    }catch(e){
        res.json({message:e})
    }
})

router.post('/create', async (req,res)=> {
    const user = new Users(req.body)
    try{
        const newUser = await user.save()
        res.json(newUser)
    }catch(e){
        res.json({message:e})
    }
})

router.patch('update/:id', async (req,res) =>{
    try{
       const changeUser = await Users.updateOne({_id:req.params.id}, {$set:{gender:req.body.gender}})
    }catch{
        res.json({message:e})
    }
})


router.delete('/remove/:id', async (req,res) => {
    try{
        const deletedUser = await Users.deleteOne({_id:req.params.id})
        res.json({message:'removed post'})
    }catch(e){
        res.json({message:e})
    }
})



module.exports = router