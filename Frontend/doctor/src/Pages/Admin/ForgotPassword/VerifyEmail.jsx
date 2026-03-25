import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import TextField from '@mui/material/TextField'
import { useNavigate } from 'react-router-dom'
import './Verify.css'
import axios from 'axios'
const VerifyEmail = () => {
    const [err,seterr] = useState('');
    const [usermail, setusermail] = useState(false);
    const [myemail, setmyemail] = useState("");
    const[userotp,setuserotp]=useState(false);
     const [otperr, setotperr] = useState('');
    const navigate=useNavigate();
    const Verification = async (data) => {
        await new Promise((resolve, reject) => {
            setTimeout(async() => {
               try {
              
                const response=await axios.post('/api/sendOTP',data);
                console.log(response.data.OTP);
                resolve("Sucesss");
                setmyemail(data.Email);
                console.log(data.Email);
                setusermail(true);
                     
                if(response){
                    setEmailValue(true)
                }
                
               } catch (error) {
                const wrong=error.response.data.message;
               console.log(wrong);
               setusermail(true)
               
                seterr(wrong)
                reject("False")
                
               }
            }, 3000);
        })
    }
    const {
        register:Emailregister,

        handleSubmit:handleEmailSubmit,

        formState: { isSubmitting:Emailsubmitting }
    } = useForm();
    const{
        register:otpregister,
        handleSubmit:otpsubmit,
        formState:{isSubmitting:otpsubmitting}
    }=useForm();
    const VerifyOTP=async(data)=>{
        await new Promise((resolve, reject) => {
            setTimeout(async() => {
             try {
                const newData={...data,
                    Email:myemail
                }
                     const response=await axios.post('/api/verifyotp',newData);
                 console.log(response.data);
                 setuserotp(false);
                 if(response){
                    navigate('/createnewpassword',{state:{myemail}});
                 }
                 resolve("succsss")
             } catch (error) {
                const otperrs=error.response.data.message;
                setuserotp(true);
                setotperr(otperrs);
                reject("Wrong")
             }
            }, 3000);
        })
    }

    const [EmailValue, setEmailValue] = useState("");
    return (
        <div className='verify'>

            <div className="verify-conatiner">
                <div className="verify-mail">  <form onSubmit={handleEmailSubmit(Verification)}>
                    <div className="verify-user">
                        <TextField label="Email" type="email" {...Emailregister("Email",{required:{value:true}})} placeholder='Email Address' 
                        />
                    </div>
                    <button type="submit"> {Emailsubmitting ? (
                        <span className="popup-verify"></span>
                    ):("send OTP")}</button>
                    

                </form>
                {usermail&&<p className='mailconfirm'>{err}</p>}
                </div>
                {EmailValue && (
                    <div className="verify-otp">
                  
                        <form onSubmit={otpsubmit(VerifyOTP)}>
                            
                            <div className="otp-verify"><label>Verify OTP</label> <input type="text" {...otpregister("OTP",{required:{value:true}})} /></div>
                            <button type="submit">{otpsubmitting?(
                                <div className="otp-verification"></div>
                            ):("verify")}</button>
                          
                        </form>
                        {userotp&&<p className='otperror'>{otperr}</p>}
                    </div>

                )}

            </div>


        </div>
    )
}

export default VerifyEmail
