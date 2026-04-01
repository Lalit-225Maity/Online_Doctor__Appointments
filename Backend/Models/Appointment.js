const { Schema, model } = require('mongoose');
const Appointment = new Schema({
    UserID: {
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    Username: {
        type: String
    },
    PaymentMethod: {
        type: String,
    },
    Paid: {
        type: String,

    },
    Appoint_Date: {
        type: Date
    },
    Mobile: {
        type: String
    },
    DoctorName: {
        type: String
    },
    Department: {
        type: String
    },
    image:{
        type:String
    },
    time:{
        type:String
    }
})
const ConfirmAppointment = model("Appointment", Appointment);
module.exports = ConfirmAppointment 