const mongoose=require("mongoose")
const Schema=mongoose.Schema

const categschema=new Schema({
    name:{
        type:String,
        required:true
    },
    products:[{
        type:Schema.Types.ObjectId,
        ref:'product',
        
    }]
})
const category=mongoose.model('category',categschema)
module.exports=category