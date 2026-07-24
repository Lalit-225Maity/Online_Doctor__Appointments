import React from 'react'
import { useForm } from 'react-hook-form'
import './Signup.css'
import TextField from '@mui/material/TextField'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
const Signup = () => {
  const navigate = useNavigate();
  const [signup_err, setsignup_err] = useState('');
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting }
  } = useForm();
  const FormSubmit = async (data) => {
    await new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          const response = await axios.post('/api/create', data);
          console.log(response.data);
          resolve("success");
          navigate('/login');

        } catch (error) {
          const err = error.response.data.message;
          console.log(err);
          setsignup_err(err);
          reject("False")


        }
      }, 3000);
    })
  }
  return (
    <div className='signup'>
      <img src="https://accounts.practo.com/static/images/illustration.png" alt="Error" />
      <div className="user-form">
        <h3>Join Lybrate</h3>
        <form onSubmit={handleSubmit(FormSubmit)}>
          <TextField type="text" placeholder='Full Name' {...register("Name")} variant="outlined" label="Full Name" size='small' color='dark'/>
          <TextField type="email" placeholder='Email' {...register("Email")} variant="outlined" label="Email" size='small' color='dark'/>
          <TextField type="tel" placeholder='Mobile No.' {...register("PhoneNumber")} label="Mobile No." variant="outlined" size='small' color='dark' />
          <TextField type="text" placeholder='Address' {...register("Address")} label="Address" variant="outlined" size='small' color='dark'/>
          <TextField type="password" placeholder='Password'  {...register("Password")} label="Create password" variant="outlined" autoComplete='off' size='small' color='dark'/>
          <TextField type="password" placeholder='retype password' {...register("ConfirmPassword")} variant="outlined" label="Retype Password" autoComplete='off'size='small' color='dark'/>
          <button type="submit">{isSubmitting?(
            <div className="account-creates"></div>
          ):("create account")}</button>
         
        </form>
        {signup_err?<p style={{color:"red"}}>{signup_err}</p>:''}
      </div>
    </div>
  )
}

export default Signup
