const {Schema,model}=require('mongoose');
const otp=new Schema({
    OTP:{
        type:Number,
        required:true
    },
    Email:{
        type:String,
        required:true
    }
})
const Otp=model("OTP",otp);
module.exports=Otp;