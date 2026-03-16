const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../Models/UserModel');
const Otp = require('../Models/OTP');
const sendEmail = require('../Config/sendEmail');
const CreateOTP = async (req, res) => {
    try {
        const { Email } = req.body;
        const users = await User.findOne({ Email });
        if (!users) {
            return res.status(404).json({
                message: "User not Found"
            })
        }
        const OTP = Math.floor(100000 + Math.random() * 999999);
        const OTPGenerate = new Otp({ Email, OTP });
        await OTPGenerate.save();
        const message = `Your verification code for password reset is ${OTP} `;
        await sendEmail(Email, "reset Password", message);
        console.log("OTP:", OTP);
        res.status(200).json({ message: "OTP generated successfully", OTP });


    }
    catch (error) {
        res.status(500).json({
            message: error.message
        })

    }
}
const VerifyOTP = async (req, res) => {
    try {
        const { Email, OTP } = req.body;
        const otpRecord = await Otp.findOne({ Email, OTP });
        if(!OTP||(OTP.length!==6)){
            return res.status(404).json({
                message:"OTP must be 6 digits"
            })
        }
        if (!otpRecord) {
            return res.status(404).json({
                message: "Invalid OTP"
            })
        }
        res.status(200).json({
            message: "OTP verificatoon succesfull"
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}
const NewPassword = async (req, res) => {
    try {
        const { Email, newPassword } = req.body;
        const user = await User.findOne({ Email });
        if (!user) {
            return res.status(404).json({
                message: "User does not exists"
            })
        }
        const salt = await bcrypt.genSalt(10);
        const Hash = await bcrypt.hash(newPassword, salt);
        user.Password = Hash;
        const token = jwt.sign({ id: user._id, email: user.Email }, "shhhhhhh");
        res.cookie("token", token)
        await user.save();

        await Otp.deleteMany({});
        res.status(200).json({
            user:user
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}
module.exports = { CreateOTP, VerifyOTP, NewPassword }