const mongoose = require('mongoose')

const schema1= new mongoose.Schema({
    "name":{
        required:true,
        type:String,
        unique:true,
        trim:true
    },
    "rank":{
        type:Number,
        trim:true,
        required:true
    }

})
const users = new mongoose.model('users',schema1)
module.exports= users;