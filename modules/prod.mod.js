const mongoose=require("mongoose")
    const bcrypt = require('bcryptjs');
    const Schema=mongoose.Schema

    const prodschema=new Schema({
        name:{
            type:String,
            required:true
        },
        description:{
            type:String,
            minLength:11
        },
        image:{
            type:String
        },
        category:{
            type:String,
            required:true
        },
        brand:{
            type:String,
            required:true
        } 
    })
    const product=mongoose.model('product',prodschema)
    module.exports=product