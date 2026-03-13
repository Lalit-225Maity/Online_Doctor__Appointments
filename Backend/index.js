const express=require('express');
const dotenv=require('dotenv');
const app=express();
app.use(express.json());
dotenv.config();
const Database=require('./Database/db');
Database();
const DoctorDetails=require('./Routes/Doctors');
app.use('/api',DoctorDetails);
const User=require('./Routes/Customer');
app.use('/api',User);
const Appointment=require('./Routes/Appointment');
app.use('/api',Appointment);
const port=process.env.PORT;
app.listen(port,()=>{
    console.log(`server running at ${port}`);
    
})