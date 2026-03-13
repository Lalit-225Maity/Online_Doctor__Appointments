const { Schema, model } = require('mongoose');
const Doctors = new Schema({
    id: {
        required: true,
        type: Number
    },
    name: {
        required: true,
        type: String
    },
    specialty: {
        required: true,
        type: String
    },
    city: {
        required: true,
        type: String
    },
    day: {

        required: true,
        type: String
    },
    timing: {
        required: true,
        type: String
    },
    phone: {
        required: true,
        type: String
    },
    experience: {
        required: true,
        type: String
    },
    photo: {
        required: true,
        type: String
    },
    treats: {
        required: true,
        type: [String]
    }

})
const Doctor = model("Doctor", Doctors);
module.exports = Doctor;