import React from 'react'
import './PersonalDetails.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLocation } from 'react-router-dom';
const PersonalDetails = () => {
    const{state}=useLocation();
    const{appointmentDate,price,department,doctorDetails,image,time}=state||{};
    const navigate=useNavigate();
    const [choosedate, setchoosedate] = useState();
    const [State, setState] = useState(false)
    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { isSubmitting,errors }
    } = useForm();
    const BookNow = async (data) => {
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                
                resolve("success");
                navigate('/confirm',{state:{appointment:data,appointmentDate:appointmentDate,Price:price,department:department,doctorDetails:doctorDetails,image:image,time:time}})

            }, 3000);
        })
    }
    return (
        <div className='personalinfo'>
            <img src="https://www.peerlesshospital.com/images/appointment-banner.webp" alt="Error" />
            <div className="doc-appoiont-schedules">
                <div className="schedule-appointment">
                    <div className="circle-1">1</div>
                    <p>Schedule Appointment</p>
                </div>
                <div className="patient">
                    <div className="circle-2">2</div>
                    <p>Patient Details</p>
                </div>
                <div className="confirmation">
                    <div className="circle-3">3</div>
                    <p>Confirmation</p>
                </div>
            </div>

            <form onSubmit={handleSubmit(BookNow)}>
                <div className="personaldetails">
                    <h5>Personal Information</h5>
                    <div className="Patientname">
                        <span>
                            <label>First Name</label>
                            <input type="text" {...register("FirstName",{required:{value:true,message:"First Name is required"}})} />
                            {errors.FirstName&&<p style={{color:"red"}}>{errors.FirstName.message}</p>}
                        </span>
                        <span>
                            <label>Last Name</label>
                            <input type="text" {...register("LastName",{required:{value:true,message:"Last Name is required"}})} />
                             {errors.LastName&&<p style={{color:"red"}}>{errors.LastName.message}</p>}
                        </span>
                        <span>
                            <label>Date of Birth</label>
                            <DatePicker
                                selected={choosedate}
                                onChange={(date) => {
                                    setchoosedate(date)
                                    setValue("DateOfBirth", date);
                                }}
                                showMonthDropdown
                                showYearDropdown
                                scrollableYearDropdown
                                yearDropdownItemNumber={100}
                                dateFormat="dd/MM/yyyy"

                            />
                            <input type="hidden" {...register("DateOfBirth",{required:{value:true,message:"Date of Birth is required"}})} />
                            {errors.DateOfBirth&&<p style={{color:"red"}}>{errors.DateOfBirth.message}</p>}
                        </span>

                        <div className='gender'>
                        <label>Sex</label>
                            <div className='select-gender'>
                                <label htmlFor="male">Male</label>
                                <input type="radio" id="male" value="Male" {...register("Gender")} />
                                

                                <label htmlFor="female">Female</label>
                                <input type="radio" id="female"  value="Female" {...register("Gender")} />
                            </div>
                        </div>
                    </div>
                </div>
                <h5>Address Details</h5>
                <div className="patient-address">
                    <span>
                        <label>State</label>
                        <input type="text" {...register("state",{required:{value:true,message:"select state"}})} onClick={() => {
                            setState(true)
                        }} />
                         {errors.state&&<p style={{color:"red"}}>{errors.state.message}</p>}
                        {State && (
                            <span>
                                <p onClick={() => { setValue("state", "Andhra Pradesh"); setState(false) }}>Andhra Pradesh</p>
                                <p onClick={() => { setValue("state", "Arunachal Pradesh"); setState(false) }}>Arunachal Pradesh</p>
                                <p onClick={() => { setValue("state", "Assam"); setState(false) }}>Assam</p>
                                <p onClick={() => { setValue("state", "Bihar"); setState(false) }}>Bihar</p>
                                <p onClick={() => { setValue("state", "Chhattisgarh"); setState(false) }}>Chhattisgarh</p>
                                <p onClick={() => { setValue("state", "Goa"); setState(false) }}>Goa</p>
                                <p onClick={() => { setValue("state", "Gujarat"); setState(false) }}>Gujarat</p>
                                <p onClick={() => { setValue("state", "Haryana"); setState(false) }}>Haryana</p>
                                <p onClick={() => { setValue("state", "Himachal Pradesh"); setState(false) }}>Himachal Pradesh</p>
                                <p onClick={() => { setValue("state", "Jharkhand"); setState(false) }}>Jharkhand</p>
                                <p onClick={() => { setValue("state", "Karnataka"); setState(false) }}>Karnataka</p>
                                <p onClick={() => { setValue("state", "Kerala"); setState(false) }}>Kerala</p>
                                <p onClick={() => { setValue("state", "Madhya Pradesh"); setState(false) }}>Madhya Pradesh</p>
                                <p onClick={() => { setValue("state", "Maharashtra"); setState(false) }}>Maharashtra</p>
                                <p onClick={() => { setValue("state", "Manipur"); setState(false) }}>Manipur</p>
                                <p onClick={() => { setValue("state", "Meghalaya"); setState(false) }}>Meghalaya</p>
                                <p onClick={() => { setValue("state", "Mizoram"); setState(false) }}>Mizoram</p>
                                <p onClick={() => { setValue("state", "Nagaland"); setState(false) }}>Nagaland</p>
                                <p onClick={() => { setValue("state", "Odisha"); setState(false) }}>Odisha</p>
                                <p onClick={() => { setValue("state", "Punjab"); setState(false) }}>Punjab</p>
                                <p onClick={() => { setValue("state", "Rajasthan"); setState(false) }}>Rajasthan</p>
                                <p onClick={() => { setValue("state", "Sikkim"); setState(false) }}>Sikkim</p>
                                <p onClick={() => { setValue("state", "Tamil Nadu"); setState(false) }}>Tamil Nadu</p>
                                <p onClick={() => { setValue("state", "Telangana"); setState(false) }}>Telangana</p>
                                <p onClick={() => { setValue("state", "Tripura"); setState(false) }}>Tripura</p>
                                <p onClick={() => { setValue("state", "Uttar Pradesh"); setState(false) }}>Uttar Pradesh</p>
                                <p onClick={() => { setValue("state", "Uttarakhand"); setState(false) }}>Uttarakhand</p>
                                <p onClick={() => { setValue("state", "West Bengal"); setState(false) }}>West Bengal </p>
                            </span>
                        )}
                    </span>
                    <span>
                        <label>District</label>
                        <input type="text" {...register("District",{required:{value:true,message:"select district"}})} />
                         {errors.District&&<p style={{color:"red"}}>{errors.District.message}</p>}
                    </span>
                    <span>
                        <label>Pincode</label>
                        <input type="text" {...register("Pincode",{required:{value:true,message:"Pincode is required"}})} />
                         {errors.Pincode&&<p style={{color:"red"}}>{errors.Pincode.message}</p>}
                    </span>
                    <span>
                        <label>Address Line</label>
                        <input type="text" {...register("Patient_Address",{required:{value:true,message:"Address is required"}})} />
                         {errors.Patient_Address&&<p style={{color:"red"}}>{errors.Patient_Address.message}</p>}
                    </span>
                </div>
                <h5>Contact Details</h5>
                <div className="patient-contact-number">
                    <span>
                        <label>Mobile No.</label>
                        <input type="tel" {...register("MobileNumber",{required:{value:true,message:"Mobile Number is required"}})} />
                         {errors.MobileNumber&&<p style={{color:"red"}}>{errors.MobileNumber.message}</p>}
                    </span>
                    <span>
                        <label>Patient Email ID</label>
                        <input type="text" {...register("Patient_Email_ID",{required:{value:true,message:"Email ID required"}})} />
                         {errors.Patient_Email_ID&&<p style={{color:"red"}}>{errors.Patient_Email_ID.message}</p>}
                    </span>
                </div>
                <input type="submit" value={isSubmitting ? "Booking...." : "Book Now"} />
            </form>


        </div>
    )
}

export default PersonalDetails
