const {Schema,model}=require('mongoose');
const otp=new Schema({
    OTP:{
        type:Number,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    disappearAt:{
        type:Date,
        default:Date.now,
        expires:300
    }
})
const Otp=model("OTP",otp);
module.exports=Otp;