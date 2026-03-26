const express = require('express');
const router = express.Router();
const { CreateOTP, VerifyOTP, NewPassword } = require('../Controller/AccountController');
const {CreateAccount,Login,Logout}=require('../Controller/Customer');
router.post('/create', CreateAccount);
router.post('/logout',Logout);
router.post('/login',Login);
router.post('/sendOTP', CreateOTP);
router.post('/verifyotp', VerifyOTP);
router.post('/forgotpassword', NewPassword);
module.exports = router