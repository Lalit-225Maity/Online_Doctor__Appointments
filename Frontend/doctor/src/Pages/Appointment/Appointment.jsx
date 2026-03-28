import React, { useState } from 'react'
import './Appointment.css'
import { useLocation } from 'react-router-dom'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from 'react-router-dom';

const Appointment = ({ setisAllowed }) => {
  const navigate = useNavigate();
  const [startdate, setstartdate] = useState();
  const { state } = useLocation();
  const { doctorDetails, department, image, id } = state || {};
  const stp = 1;
  const daymap = {
    Sunday: 0,
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6
  }

  return (
    <div className='appointment'>
      <img src="https://www.peerlesshospital.com/images/appointment-banner.webp" alt="Error" />
      <div className="doc-appoiont-schedule">
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
      <div className="e-appointment">
        <span>E-Appointment</span>
        <h4>Schedule Your Appointment</h4>
        <div className="doc-name-price">
          <h4>{doctorDetails.name}</h4>
          <span>Appointment Fee : ₹1200/-</span>
        </div>

        <div className="day-timmings">
          <h4>{doctorDetails.day}:<p>{doctorDetails.timing}</p></h4>
        </div>
        <div className="patient-department">
          <div className="department">
            <h4>Your Department</h4>
            <input type="text" value={department} readOnly />
          </div>
          <div className="your-doctor">
            <h4>Your Doctor</h4>
            <input type="text" value={doctorDetails.name} readOnly />
          </div>
          <div className="appointment-date">
            <h4>Appointment Date</h4>
            <DatePicker
              selected={startdate}
              filterDate={(date) => { return date.getDay() === daymap[doctorDetails.day] }}
              onChange={(date) => { setstartdate(date) }}
              dateFormat="dd/MM/yyyy"
              required="true"
              minDate={new Date()}
              placeholderText='Select the Date'
            />
          </div>
        </div>
        <button className='button' onClick={() => {
            if (startdate) {
            setisAllowed(true);
             navigate('/personalinfo', { state: { appointmentDate: startdate, price: 1200, department: department, doctorDetails: doctorDetails, image: image, time: doctorDetails.timing, id, stp } });
          }
          
         
        }}>Next</button>
      </div>


    </div>
  )
}

export default Appointment
