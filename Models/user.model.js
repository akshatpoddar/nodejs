const mongoose = require('mongoose')


const Users = mongoose.Schema({
    username:{
        type:String
    }, 
    password:{
        type:String
    },
    age:{
        type:Number
    },
    gender:{
        type:String
    },
    citizen:{
        type:Boolean
    }
})

module.exports = mongoose.model('Users',Users)
