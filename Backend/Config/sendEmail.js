const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const { errorMonitor } = require('nodemailer/lib/xoauth2');
dotenv.config();
const sendEmail = async(Email, subject, message) => {
  try {
       const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth:{
            user:process.env.Email_ID,
            pass:process.env.Email_Password
        }
    });
    await transporter.sendMail({
        from:process.env.Email_ID,
        to:Email,
        subject,
        text:message
    })
  } catch (error) {
      console.log(error);
      
    
  }
}
module.exports=sendEmail