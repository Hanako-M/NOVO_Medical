const mongoose=require("mongoose")
    const bcrypt = require('bcryptjs');
    const Schema=mongoose.Schema

    const adminschema=new Schema({
        username:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true,
            minlength:6
        }
    })
    adminschema.pre('save', async function () {
        if (!this.isModified("password")) return next();
        this.password = await bcrypt.hash(this.password, 10);
    });
    
    const admin=mongoose.model('admin',adminschema)
    module.exports=admin