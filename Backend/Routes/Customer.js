const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookie = require('cookie-parser');
const User = require('../Models/UserModel')
router.post('/create', (req, res) => {
    try {
        const { Name, Email, PhoneNumber, Password, Address } = req.body;
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(Password, salt, async (err, hash) => {
                const customer = new User({
                    Name,
                    Email,
                    Password: hash,
                    PhoneNumber,
                    Address
                });
                const token = jwt.sign({ Email }, "shhhhhhh");
                res.cookie("token", token)
                await customer.save();
                res.status(200).json({
                    success: true,
                    message: "User is created successfully",
                    User: customer
                })

            })
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Something went wrong" || error.message,
        })
    }
})
router.post('/login', async (req, res) => {
    try {
        const { Email, Password } = req.body;
        const Check = await User.findOne({ Email });
        if (!Check) {
            return res.status(500).json({
                message: "Something went wrong"
            })
        }
        bcrypt.compare(Password, Check.Password, (err, result) => {
            if (result) {
                const token = jwt.sign({ Email: Check.Email }, "shhhhhhh");
                res.cookie("token", token);
                res.status(200).json({
                    message: "welcome user",
                    user: Check
                })
            } else {
                 res.status(500).json({
                    message: "Invalid Password"
                })
            }
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
})
router.post('/logout',(req,res)=>{
    try {
        res.clearCookie("token");
        res.status(200).json({
            message:"user is logout"
        })
    } catch (error) {
        
    }
})
module.exports = router