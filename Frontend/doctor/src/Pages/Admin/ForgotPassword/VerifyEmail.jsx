import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import './Verify.css'
const VerifyEmail = () => {
    const navigate=useNavigate();
    const Verification = async (data) => {
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(data);
                if (data.Email) {
                    alert("We send a verification code in Email")
                    setEmailValue(true);
                }
                resolve("success")
            }, 3000);
        })
    }
    const {
        register,

        handleSubmit,

        formState: { isSubmitting }
    } = useForm()
    const VerifyOTP=async()=>{
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                navigate('/createnewpassword')
            }, 3000);
        })
    }

    const [EmailValue, setEmailValue] = useState("");
    return (
        <div className='verify'>

            <div className="verify-conatiner">
                <div className="verify-mail">  <form onSubmit={handleSubmit(Verification)}>
                    <div className="verify-user">
                        <label>Email Address</label>
                        <input type="email" {...register("Email")} placeholder='Email Address' />
                    </div>
                    <button type="submit">send OTP</button>
                    {isSubmitting && (
                        <div className="popup-verify">
                            <div className="loading-overlay">
                                <div className="spinner"></div>
                                <p>Sending verification code...</p>
                            </div>
                        </div>
                    )}

                </form></div>
                {EmailValue && (
                    <div className="verify-otp">
                  
                        <form onSubmit={handleSubmit(VerifyOTP)}>
                            
                            <div className="otp-verify"><label>Verify OTP</label> <input type="text" {...register("OTP",{required:{}})} /></div>
                            <button type="submit">verify OTP</button>
                        </form>
                    </div>

                )}

            </div>


        </div>
    )
}

export default VerifyEmail
