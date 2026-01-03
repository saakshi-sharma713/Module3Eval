import React from 'react'
import Admin from './Admin';
import Customer from './Customer';

const ProtectedRoute = ({children}) => {
    const status = localStorage.getItem("isLoggedin");

    if(!status){
   return <Navigate to="/login"/>
    }
  return (
    <div>
    {
        status == "admin" ? <Admin/> : <Customer/>
    }
    </div>
  )
}

export default ProtectedRoute
