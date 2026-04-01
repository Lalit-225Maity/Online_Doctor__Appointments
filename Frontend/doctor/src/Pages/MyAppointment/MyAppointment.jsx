import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Myappointment.css'
import { Helmet } from 'react-helmet'
const MyAppointment = () => {
    const [booking, setbooking] = useState([]);
    const[cancel,setcancel]=useState(false);
    const Cancel = async (ID) => {


        try {
            const response2 = await axios.delete('/api/cancelappointment', {
                data: { appointmentId: ID }

            })
            console.log(response2.data.Cancel);
            setcancel(true);
            setTimeout(() => {
                 setcancel(false);
                 window.location.reload();
            }, 3000);

        } catch (error) {

        }

    }
    useEffect(() => {
        (async () => {
            try {

                const response = await axios.get(
                    "/api/appointmentdetails",
                    { withCredentials: true }
                );

                console.log(response.data.Book);
                setbooking(response.data.Book);

            } catch (error) {
                console.log(error.response.data.message);

            }
        })();
        
    }, [])

    return (
        <div className='myappointment'>
        <Helmet>
            <title>My Appointments | User Appointments</title>
        </Helmet>
            <h4>My Appointments</h4>

            {booking.map((i) => (


                <div className="appointment-card" >


                    <div className="appointment-doctor-image">
                        <img src={i.image} alt="Doctor" />
                    </div>

                    <div className="appointment-details-info">



                        <p className="confirm-msg">
                            Thank you for booking your appointment. We look forward to seeing you soon.
                        </p>


                        <h5 className="doctor-name">{i.DoctorName}</h5>

                        <p>Patient Name: {i.Username}</p>

                        <p>Appointment Date : {new Date(i.Appoint_Date).toLocaleDateString('en-IN',{
                            month:'short',
                            day:'2-digit',
                            year:'numeric'
                        })}</p>

                        <p>Symptoms : {i.Department}</p>

                        <p>Appointment Time : {i.time}</p>

                        <div className="cancel-status">
                            <p className="status">
                                Status: {i.Paid}
                            </p>


                            <button
                                className="cancel-btn"
                                onClick={() => Cancel(i._id)}
                            >
                                Cancel Appointment
                            </button>

                        </div>
                    </div>

                </div>

            ))}
            {cancel&&(
                <div className="cancel-loading">
                    <div className="spin-load"></div>
                    <p>Please wait....</p>
                </div>
            )}

        </div>
    )
}

export default MyAppointment
