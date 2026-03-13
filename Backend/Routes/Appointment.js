const express = require('express');
const router = express.Router();
const AppointmentConfirm = require('../Models/Appointment')
router.post('/pay', async (req, res) => {
    try {
        const { UserID, PaymentMethod, Debit_Card, UPI_ID, DebitCard_Password, Username, Paid, Appoint_Date,
            Mobile,
            DoctorName,
            Department,
            image,time } = req.body;
        let Payment_Process;
        if (PaymentMethod === 'UPI') {
            if (!(/^[a-zA-Z0-9._-]{2,256}@[a-zA-Z]{2,64}$/.test(UPI_ID))) {
                return res.status(400).json({
                    message: "Invalid UPI ID"
                })
            }
            Payment_Process = new AppointmentConfirm({
                PaymentMethod, UserID, Username, Paid, Appoint_Date,
                Mobile,
                DoctorName,
                Department,
                image,
                time
            })

        }
        if (PaymentMethod === 'Debit Card') {
            if (!(/^[0-9]{16}$/.test(Debit_Card))) {
                return res.status(400).json({
                    message: "Invalid Card Number"
                })
            }
            if (DebitCard_Password.length !== 4) {
                return res.status(500).json({
                    message: "Password must be exactly 4 digits"
                })
            }

            Payment_Process = new AppointmentConfirm({
                PaymentMethod, UserID, Username, Paid, Appoint_Date,
                Mobile,
                DoctorName,
                Department,
                image,
                time
            });


        }
        await Payment_Process.save();
        res.status(200).json({
            success: true,
            message: "Payment is complete",
            Payment_Process: Payment_Process
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
})
router.get('/appointmentdetails', async (req, res) => {
    try {
        const { UserCheck } = req.query;
        const Fetch = await AppointmentConfirm.find({
            UserID: { $in: UserCheck }
        });
        res.status(200).json({
            Book: Fetch
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
})
router.delete('/cancelappointment', async (req, res) => {
    try {
        const { Userid } = req.query;
        const Cancel = await AppointmentConfirm.findOneAndDelete({
            UserID: { $in: Userid }
        })
        res.status(200).json({
            success: true,
            message: "Appointment is Cancel",
            Cancel: Cancel
        })
    } catch (error) {

    }
})
module.exports = router