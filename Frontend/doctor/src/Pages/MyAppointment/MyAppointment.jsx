import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Myappointment.css'
const MyAppointment = () => {
    const [booking, setbooking] = useState([]);
    const Cancel = async (ID) => {


        try {
            const response2 = await axios.delete('/api/cancelappointment', {
                data: { appointmentId: ID }

            })
            console.log(response2.data.Cancel);

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
        })()
    }, [])

    return (
        <div className='myappointment'>
            <h4>My Appointments</h4>
            {booking.map((i) => (
                <div className="myappointment-details">
                    <div className="doctor-image">
                        <img src={i.image} alt="" />
                    </div>
                    <div className="user-appoint-details">
                        <h4>Thank you for your appointment</h4>
                        <p> Hi {i.Username},
                            Just to let you know your appointment is confirmed, and we look forward to seeing you</p>
                        <h5>{i.DoctorName}</h5>
                        <p>Symptoms : {i.Department}</p>
                        <div className="appoint-time-date">
                            <p>Appointment Date : {i.Appoint_Date}</p>|<p>Time Slot : {i.time}</p>
                        </div>
                        <p>Booking Status : {i.Paid}</p>
                        <button onClick={() => { Cancel(i._id) }} style={{ backgroundColor: "red" }}>Cancel</button>
                    </div>

                </div>

            ))}
        </div>
    )
}

export default MyAppointment
