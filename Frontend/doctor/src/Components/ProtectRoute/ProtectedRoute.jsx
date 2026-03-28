import React from 'react'
import { Navigate, Outlet } from "react-router-dom";
const ProtectedRoute = ({ isAllowed }) => {
    return isAllowed ? <Outlet /> : <Navigate to='/appointment' />
}
const Bookroute=({isBook})=>{
    return isBook?<Outlet/>:<Navigate to='/doctors'/>
}
export {ProtectedRoute,Bookroute};