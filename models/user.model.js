const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true,
        enum:['admin','user'],
        default:'user'
    },

})


const user = mongoose.model('userSchema',userSchema)

module.exports = user