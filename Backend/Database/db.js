const mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config();
const ConnectDB=async()=>{
    try {
        const Database=await mongoose.connect(`${process.env.MONGO_DB}`);
        console.log(`Database Connect`);
        
    } catch (error) {
        console.log(error.message);
        
    }
}
module.exports=ConnectDB;