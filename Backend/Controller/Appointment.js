const AppointmentConfirm = require('../Models/Appointment');
const User = require('../Models/UserModel');
const Doctor = require('../Models/DoctorModel');
const Payment = async (req, res) => {
    try {
        const userId = req.user.id;
        const { PaymentMethod,
            Username,
            Paid,
            Appoint_Date,
            Mobile,
            UPI_ID,
            DebitCard_Password,
            Debit_Card,
            Department,
            id } = req.body;

        const UserVerify = await User.findOne({ _id: userId });
        if (!UserVerify) {
            return res.status(500).json({
                message: "something went wrong"
            })
        }
        const DoctorrVerify = await Doctor.findOne({ _id: id });
        if (!DoctorrVerify) {
            return res.status(500).json({
                message: "something went wrong"
            })
        }
        let Payment_Process;
        if (PaymentMethod === 'UPI') {
            if (!(/^[a-zA-Z0-9._-]{2,256}@[a-zA-Z]{2,64}$/.test(UPI_ID))) {
                return res.status(400).json({
                    message: "Invalid UPI ID"
                })
            }

            Payment_Process = new AppointmentConfirm({
                PaymentMethod, UserID: userId, Username, Paid, Appoint_Date,
                Mobile,
                DoctorName: DoctorrVerify.name,
                Department,
                image: DoctorrVerify.photo,
                time: DoctorrVerify.timing
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
                DoctorName: DoctorrVerify.name,
                Department,
                image: DoctorrVerify.photo,
                time: DoctorrVerify.timing
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
const Appointments = async (req, res) => {
    try {
        const userId = req.user.id;
        await AppointmentConfirm.deleteMany({
            Appoint_Date: { $lte: new Date() }
        })
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
}
const CancelAppointment = async (req, res) => {
    try {
        const userId = req.user.id;
        const { appointmentId } = req.body;
        const Cancel = await AppointmentConfirm.findOneAndDelete({
            _id: appointmentId,
        })
        res.status(200).json({
            success: true,
            message: "Appointment is Cancel",
            Cancel: Cancel
        })
    } catch (error) {

    }
}
module.exports = { Appointments, Payment, CancelAppointment }