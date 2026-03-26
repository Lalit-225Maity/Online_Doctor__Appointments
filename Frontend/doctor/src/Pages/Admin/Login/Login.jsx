import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import './Login.css'
const Login = () => {
  const [userLogin, setuserLogin] = useState(false);
  const [loginerr, setloginerr] = useState('');
  const [userName, setuserName] = useState();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting }
  } = useForm();
  const Mysubmit = async (data) => {
    await new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          const response = await axios.post('/api/login', data);
          console.log(response.data.user.Name);

          setuserLogin(true);

          resolve("Success");

          const Names = response.data.user.Name;
          setuserName(Names);
          const Email = response.data.user.Email;
          localStorage.setItem("Name", JSON.stringify(Names));
          localStorage.setItem("Email_ID", JSON.stringify(Email));
          setTimeout(() => {
            navigate('/');
          }, 2000);
        } catch (error) {
          setloginerr(error.response.data.message);
          reject("Error")
        }
      }, 3000);
    })
    reset();
  }

  return (
    <div className='login'>
      {userLogin && (
        <div className="login-toast">
          <div className="toast-header">
            <p>Lybrate</p>
          </div>
          <div className="toast-body">
            <h4>Welcome {userName}</h4>
          </div>
        </div>
      )}
      <h4>Login</h4>
      <form onSubmit={handleSubmit(Mysubmit)}>
        <TextField label="Email" type="email" placeholder='Email'{...register('Email')} variant="outlined"  autoComplete='off' />
         <TextField label="Password" type='password' placeholder='Password' {...register('Password')}  variant="outlined" className='textfield-pass' autoComplete='off'/>
         <button type="submit">{isSubmitting?(<div className="submit-load"></div>
         ):("Login")}</button>
        {loginerr && <p style={{ color: "red" }}>{loginerr}</p>}
        <div className="forgot-create">
          <NavLink to='/signup'>Create Account</NavLink>
          <NavLink to='/verify'>Forgot Password ?</NavLink>
        </div>
      </form>


    </div>
  )
}
export default Login
