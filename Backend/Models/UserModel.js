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
         match:[/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/,"Password must be 8+ characters and include uppercase, lowercase, number and special character"]
    },
    PhoneNumber:{
        required:true,
        type:String,
        match:[/^(?:\+91|91)?[6-9]\d{9}$/,
            "Please enter a valid Indian mobile number"]
    },
    Address:{
        type:String
    }
})
const User=model("User",Users);
module.exports=User