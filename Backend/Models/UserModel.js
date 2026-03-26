const{Schema,model}=require('mongoose');
const Users=new Schema({
    Name:{
        required:true,
        type:String
    },
    Email:{
         required:true,
        type:String
    },
    Password:{
         required:true,
         type:String,
 
    },
    PhoneNumber:{
        required:true,
        type:String
    },
    Address:{
        type:String
    }
})
const User=model("User",Users);
module.exports=User