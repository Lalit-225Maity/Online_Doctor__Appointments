import React from 'react'
import { useForm } from 'react-hook-form'
import './Signup.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Signup = () => {
  const navigate=useNavigate();
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
           const err=error.response.data.message;
           console.log(err);
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
          <label>Full Name</label>
          <input type="text" placeholder='Full Name' {...register("Name")} />
          <label>Email</label>
          <input type="email" placeholder='Email' {...register("Email")} />
          <label>Mobile No.</label>
          <input type="tel" placeholder='Mobile No.' {...register("PhoneNumber")} />
           <label>Address</label>
          <input type="text" placeholder='Address' {...register("Address")} />
          <label>Create password</label>
          <input type="password" placeholder='Password'  {...register("Password")} />
          <label>Retype Password</label>
          <input type="password" placeholder='retype password' {...register("ConfirmPassword")} />
          
          <input type="submit" value={isSubmitting ? "creating account....." : "Create account"} />
        </form>
      </div>
    </div>
  )
}

export default Signup
