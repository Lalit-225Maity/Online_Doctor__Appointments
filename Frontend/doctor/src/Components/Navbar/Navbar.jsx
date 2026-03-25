import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'
const Navbar = () => {
    const [userhover, setuserhover] = useState(false);
    const [username, setusername] = useState('')
    const [city, setcity] = useState('');
    const {
        register,
        setValue,
        handleSubmit,
        reset,
        formState: { isSubmitting }
    } = useForm();
    const navigate = useNavigate();
    const [book, setbook] = useState(false);
    useEffect(() => {
    const User = localStorage.getItem("Name");

    if (User) {
        try {
            setusername(JSON.parse(User));
        } catch {
            setusername(User);  
        }
    }
}, []);
    const Logout = async () => {
        try {
            const response2 = await axios.post('/api/logout');
            localStorage.removeItem("Name");
            localStorage.removeItem("Email_ID");
            console.log(response2.data);
            navigate('/login');
        } catch (error) {
            console.log(error);
        }
    }
    const Appoint = async (data) => {
        await new Promise((resolve, reject) => {
            setTimeout(() => {
               const CityADD={
                ...data,
                city:city,
               }
               console.log(CityADD);
               resolve();
               
            }, 3000);
        })
    }
    return (
        <div className='navbar'>
            <div className="nav-one">
                <img src="https://assets.lybrate.com/f_auto,c_limit,w_256,q_auto/imgs/product/logos/Lybrate-Logo.png" alt="Error" onClick={() => { navigate('/') }} />
                <div className="nav-components">
                    <NavLink to='/getapp' className={(e) => { return e.isActive ? "red" : "green" }} ><p>Get the App</p></NavLink>
                    <NavLink to='/fordoctor' className={(e) => { return e.isActive ? "red" : "green" }} > <p>For Doctors</p></NavLink>
                    <NavLink to='/free' className={(e) => { return e.isActive ? "red" : "green" }} id='free'><button>Book Free Appointment</button></NavLink>
                    {username ? (
                        <div className='userlogin' onMouseEnter={() => { setuserhover(true) }} onMouseLeave={() => { setuserhover(false) }}>
                            <img src="/user (3).png" alt="" />
                             {/* <p>{username}</p> */}
                            {userhover && (
                                <div className='userlog'>
                                    <p> Orders</p>
                                    <p> Buy Again</p>
                                    <p>Redeem LybrateCash</p>
                                    <p>My Offers</p>
                                    <p>My Questions</p>
                                    <p onClick={() => { navigate('/myappointment') }}>My Appointments</p>
                                    <p>My Packages</p>
                                    <p>My Lab Reports</p>
                                    <p>My Orders</p>
                                    <p>Health Feed</p>
                                    <p>Browse Health Categories</p>
                                    <p onClick={() => { Logout() }}> Logout</p>
                                </div>
                            )}
                        </div>
                    ) : (
                        <NavLink to='/login' className={(e) => { return e.isActive ? "red" : "green" }} >Login/Signup</NavLink>

                    )}
                </div>

            </div>
            <div className="nav-two">
                <div className="book" onClick={() => { setbook(true) }}>
                    <img src="/booking.png" alt="" />
                    <h4>Book Appointment</h4>
                </div>
                <div className="treat-patient">
                    <img src="/treatment-plan.png" alt="" />
                    <h4>Treatment</h4>
                </div>
                <div className="question">
                    <img src="/ask (1).png" alt="" />
                    <h4>Ask question</h4>
                </div>
                <div className="surgery" onClick={() => { navigate('/my-surgery') }}>
                    <img src="/surgery-room (1).png" alt="" />
                    <h4>Plan my Surgery</h4>
                </div>
                <div className="feed">
                    <img src="/feeding-pump.png" alt="" />
                    <h4>Health Feed</h4>
                </div>
            </div>
            {book && (
                <div className='home-book-appointment'>
                    <div className="appoint-container">
                        <div className="book-appoint">
                            <h3>Book Appointment</h3>
                            <span onClick={() => { setbook(false); reset() }}> <img src="/close.png" alt="Error" /></span>
                        </div>
                        <div className="appointment-form">
                            <form onSubmit={handleSubmit(Appoint)}>
                                <input type="text" placeholder='Speciality/Symptom/Treatment/Doctor/Clinic' {...register("Symptom")} />
                                <button type="submit" >{isSubmitting ? "searching...." : "search"}</button>
                            </form>

                            <div className="select-city">
                                <input type="text" placeholder='Enter City' value={city} onChange={(e) => { setcity(e.target.value) }} />
                                <input type="text" placeholder='Locality' />
                            </div>
                            <h5>Common Issues</h5>
                            <div className="appoint-disease">
                                <p onClick={() => { setValue("Symptom", "Acne/Pimples") }}>Acne/Pimples</p>
                                <p onClick={() => { setValue("Symptom", "Hair Fall") }}>Hair Fall</p>
                                <p onClick={() => { setValue("Symptom", "Premature Ejaculation") }}>Premature Ejaculation</p>
                                <p onClick={() => { setValue("Symptom", "Erection Problems") }}>Erection Problems</p>
                                <p onClick={() => { setValue("Symptom", "Weight Loss") }}>Weight Loss</p>
                                <p onClick={() => { setValue("Symptom", "Depression") }}>Depression</p>
                                <p onClick={() => { setValue("Symptom", "Irregular Periods") }}>Irregular Periods</p>
                                <p onClick={() => { setValue("Symptom", "Pregnancy") }}>Pregnancy</p>
                                <p onClick={() => { setValue("Symptom", "Knee Pain") }}>Knee Pain</p>
                                <p onClick={() => { setValue("Symptom", "Childcare") }}>Childcare</p>
                                <p onClick={() => { setValue("Symptom", "Diabetes") }}>Diabetes</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar
