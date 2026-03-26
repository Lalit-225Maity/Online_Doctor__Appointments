const express = require('express');
const router = express.Router();
const verifyAuth = require('../Middleware/Auth.js');
const{Appointments,Payment,CancelAppointment}=require('../Controller/Appointment.js')
router.post('/pay', verifyAuth,Payment );
router.get('/appointmentdetails', verifyAuth,Appointments );
router.delete('/cancelappointment', verifyAuth, CancelAppointment)
module.exports = router;