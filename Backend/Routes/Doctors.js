const express = require('express');
const router = express.Router();
const API = require('../API/Api');
const Doctormodel = require('../Models/DoctorModel');
router.post('/createdoctor', async (req, res) => {
    try {
        
        const DOCTOR = await Doctormodel.insertMany(API);
        res.status(200).json({
            message: "data is inserted",
            Doctors: DOCTOR
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })

    }
})
router.get('/fethdoctor', async (req, res) => {
    try {
        const { keyword } = req.query;
        if (!keyword) {
            return res.status(500).json({
                message: 'Disease is not found'
            })
        }
        const DISEASE = await Doctormodel.find({
            treats: { $in: keyword }
        })
        res.status(200).json({
            message: "success",
            docDetail: DISEASE
        })
    } catch (error) {
        console.log(error.message);

    }
})
module.exports = router