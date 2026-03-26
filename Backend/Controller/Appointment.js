const AppointmentConfirm = require('../Models/Appointment');
const User=require('../Models/UserModel');
const Payment=  async (req, res) => {
    try {
        const userId = req.user.id;
        const { PaymentMethod, Debit_Card, UPI_ID, DebitCard_Password, Paid, Appoint_Date,
           
            DoctorName,
            Department,
            image, time } = req.body;

            const UserVerify=await User.findOne({_id:userId});
            if(!UserVerify){
                return res.status(500).json({
                    message:"something went wrong"
                })
            }
        let Payment_Process;
        if (PaymentMethod === 'UPI') {
            if (!(/^[a-zA-Z0-9._-]{2,256}@[a-zA-Z]{2,64}$/.test(UPI_ID))) {
                return res.status(400).json({
                    message: "Invalid UPI ID"
                })
            }
            // Name, Email, PhoneNumber, Password, Address, ConfirmPassword
            Payment_Process = new AppointmentConfirm({
                PaymentMethod, UserID: userId, Username, Paid, Appoint_Date,
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
                PaymentMethod, UserID: userId, Username, Paid, Appoint_Date,
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
}
router.get('/appointmentdetails', verifyAuth, async (req, res) => {
    try {
        const userId = req.user.id;

        const Fetch = await AppointmentConfirm.find({
            UserID: userId
        });
        res.status(200).json({
            message: "Success",
            Book: Fetch
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
})
router.delete('/cancelappointment', verifyAuth, async (req, res) => {
    try {
        const userId = req.user.id;
        const {appointmentId}=req.body;
        const Cancel = await AppointmentConfirm.findOneAndDelete({
            _id: appointmentId,
            UserID:userId
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