const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../Models/UserModel');
const CreateAccount = async (req, res) => {
    try {
        const { Name, Email, PhoneNumber, Password, Address, ConfirmPassword } = req.body;

        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/.test(Password)) {
            return res.status(400).json({
                message: "Password must be 8+ characters with uppercase, lowercase, number & special character"
            })
        }
        if (ConfirmPassword !== Password) {
            return res.status(404).json({
                message: "Password mismatch"
            })
        }
        const salt = await bcrypt.genSalt(10);
        const Hash = await bcrypt.hash(Password, salt);
        const customer = new User({
            Name,
            Email,
            Password: Hash,
            PhoneNumber,
            Address
        });

        const token = jwt.sign({ id: customer._id, email: customer.Email }, "shhhhhhh");
        res.cookie("token", token)
        await customer.save();
        res.status(200).json({
            success: true,
            message: "User is created successfully",
            User: customer
        })


    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}
const Login = async (req, res) => {
    try {
        const { Email, Password } = req.body;
        const Check = await User.findOne({ Email });
        if (!Check) {
            return res.status(500).json({
                message: "Something went wrong"
            })
        }

        const Verify = await bcrypt.compare(Password, Check.Password);
        if (!Verify) {
            return res.status(400).json({
                success: false,
                message: "something went wrong"
            })
        }
        const token = jwt.sign({ id: Check._id, Email: Check.Email }, "shhhhhhh");
        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
        });

        res.status(200).json({
            message: "Login successfull",
            user: Check
        })



    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}
const Logout = (req, res) => {
    try {
        res.clearCookie("token");
        res.status(200).json({
            message: "user is logout"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}
module.exports = { CreateAccount, Login, Logout }