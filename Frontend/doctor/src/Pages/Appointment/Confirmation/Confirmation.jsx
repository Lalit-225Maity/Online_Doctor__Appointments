import React from 'react'
import './Confirmation.css'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Confirmation = () => {
    const { state } = useLocation();
    const { appointment, appointmentDate, Price, department, doctorDetails,image,time,id } = state || {};
    const navigate = useNavigate();
    return (
        <div className='confirm'>

            <div className="doc-appoiont-confirm">
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
            <h4>Appointment Summary</h4>
            <div className="Appointment-Summary">
                <div className="confirm-patient-name">
                    <h5>Patient Name</h5>
                    <p>{appointment.FirstName} {appointment.LastName}</p>
                </div>
                <div className="confirm-phone-number">
                    <h5>Phone No</h5>
                    <p>{appointment.MobileNumber}</p>
                </div>
                <div className="confirm-date-appoint">
                    <h5>Appointment Date</h5>
                    <p>{appointmentDate.toLocaleDateString("en-IN", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                    })}</p>
                </div>
                <div className="confirm-doctor-name">
                    <h5>Doctor Name</h5>
                    <p>{doctorDetails ? doctorDetails.name : "Doctor not choose"}</p>
                </div>
                <div className="confirm-department">
                    <h5>Department</h5>
                    <p>{department}</p>
                </div>
                <div className="amount">
                    <h5>Amount to Pay</h5>
                    <p>{Price}.00/-</p>
                </div>
            </div>
            <button onClick={() => { navigate('/payment',{state:{PatientName:appointment.FirstName+appointment.LastName,Mobile:appointment.MobileNumber,DoctorName:doctorDetails.name,Department:department,Price:Price,Appoint_Date:appointmentDate.toLocaleDateString("en-IN", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                    }),email:appointment.Patient_Email_ID,image:image,time:time,id}})}}>Confirm and Pay</button>
        </div>
    )
}

export default Confirmation
