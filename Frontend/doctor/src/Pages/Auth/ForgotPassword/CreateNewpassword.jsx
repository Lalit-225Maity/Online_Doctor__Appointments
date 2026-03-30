import React, { useEffect } from 'react'
import './CreateNewPassword.css'
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const CreateNewpassword = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { myemail } = state || {};
  useEffect(() => {
    console.log(myemail);
  }, []);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm();
  const CreateNewPassword = async (data) => {
    await new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          const newPass = {
            ...data,
            Email: myemail
          }
          const response = await axios.post('/api/forgotpassword', newPass);
          console.log(response.data);
          if (response) {
            navigate('/login')
          }
          resolve("success")

        } catch (error) {
          reject("Wrong")
        }
      }, 3000);
    })
  }
  return (
    <div className='createnewpassword'>
      <form onSubmit={handleSubmit(CreateNewPassword)}>
        <TextField label="New Password" variant="outlined"
          type="password"
          className='passwordnew'
          {...register("newPassword")}
        />
        <TextField label="Retype New Password"
          {...register("ConfirmPassword")}
          variant="outlined"
          className='conpassword'
          type="password"
        />
        <button type="submit">{isSubmitting ? (
          <span className="passload">

          </span>
        ) : ("create new Password")}</button>
      </form>
    </div>
  )
}

export default CreateNewpassword
