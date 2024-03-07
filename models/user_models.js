const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email:{
        type:String,
        unique:true
    } 
},
{timestamps:true}
);

module.exports=mongoose.model('users',userSchema)

