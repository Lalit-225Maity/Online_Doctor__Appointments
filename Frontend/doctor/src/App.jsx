import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Doctors from './Pages/Doctors/Doctors';
import Appointment from './Pages/Appointment/Appointment';
import Login from './Pages/Admin/Login/Login';
import FreeAppoint from './Pages/FreeAppointment/FreeAppoint';
import Signup from './Pages/Admin/Signup/Signup';
import { useLocation } from 'react-router-dom';
import VerifyEmail from './Pages/Admin/ForgotPassword/VerifyEmail';
import CreateNewpassword from './Pages/Admin/ForgotPassword/CreateNewpassword';
import ForDoctor from './Pages/ForDoctor/ForDoctor';
import GetApp from './Pages/GetApp/GetApp';
import ProtectRoute from './Components/ProtectRoute/Protect';
import Confirmation from './Pages/Appointment/Confirmation/Confirmation';
import PersonalDetails from './Pages/Appointment/PersonalDetails';
import MyAppointment from './Pages/MyAppointment/MyAppointment';
import Payment from './Payment/Payment';
import Footer from './Components/Footer/Footer';
import Mysurgery from './Components/Navbar/PlanMySurgery/Mysurgery';
const App = () => {
  const location = useLocation();
  return (
    <div>
      {location.pathname !== '/login' && location.pathname !== '/createnewpassword' && location.pathname !== '/verify' && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route element={<ProtectRoute />}>
          <Route path='/fordoctor' element={<ForDoctor />} />
          <Route path='/getapp' element={<GetApp />} />
          <Route path='/personalinfo' element={<PersonalDetails />} />
          <Route path='/confirm' element={<Confirmation />} />
          <Route path='/myappointment' element={<MyAppointment />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/my-surgery' element={<Mysurgery />} />
          <Route path='/doctors' element={<Doctors />} />
          <Route path='/appointment' element={<Appointment />} />
          <Route path='/free' element={<FreeAppoint />} />
        </Route>
        <Route path='/verify' element={<VerifyEmail />} />
        <Route path='/createnewpassword' element={<CreateNewpassword />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />

      </Routes>
      {location.pathname !== '/login' && location.pathname !== '/signup' && location.pathname !== '/createnewpassword' && location.pathname !== '/verify' && <Footer />}
    </div>
  )
}

export default App
