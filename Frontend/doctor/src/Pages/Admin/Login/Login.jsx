import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom';
import axios from 'axios';
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

          const Name = response.data.user.Name;
          setuserName(Name);
          const Email = response.data.user.Email;
          localStorage.setItem("Name", JSON.stringify(Name));
          localStorage.setItem("Email_ID", JSON.stringify(Email));
          setTimeout(() => {
            navigate('/');
          }, 2000);
        } catch (error) {
          setloginerr(error.response.data.message);
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
        <label>Email</label>
        <input type="email" placeholder='Email'{...register('Email')} />
        <label>Password</label>
        <input type='password' placeholder='Password' {...register('Password')} />
        <input type="submit" value={isSubmitting ? "Loging...." : "Login"} />
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
