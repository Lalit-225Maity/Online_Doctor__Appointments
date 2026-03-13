import React from 'react'
import { useLocation } from 'react-router-dom'
import './Doctors.css'
import { useNavigate } from 'react-router-dom'
const Doctors = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const { doc,department } = state || {};

    return (
        <div className='doctors'>
           
            {doc&&doc.length>0?(
                 <div className="doctor-appointment-details">
                {doc.map((i) => (
                    <div className='doc-details'>
                        <div className="doc-img"> <img src={i.photo} alt="" /></div>
                        <div className="doc-info"> <p>{i.name}</p>
                            <h5>{i.specialty}</h5>
                            <h5>{i.experience}+ Experience</h5>
                           <div className="radio"> 
                            <input type="radio"   checked  readOnly/>
                            <label> Apollo Hospitals in {i.city}</label>
                            </div>
                            <div className="contact-info">  <p>Contact Info : {i.phone}</p> <button className='call'><img src="/phone.png" alt="" />CALL</button></div>
                            <div className="appoint-doc">
                                <button onClick={() => { navigate('/appointment',{state:{doctorDetails:i,department:department,image:i.photo}}) }}>Book Appointment</button>
                                <button>Review</button>
                            </div>
                        </div>
                    </div>


                ))}
            </div>
            ):(<p>Doctor not found</p>)}
        </div>
    )
}

export default Doctors
