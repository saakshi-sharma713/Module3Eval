import React from 'react'
import Sidebar from '../Components/Sidebar'
import MainContentArea from '../Components/MainContentArea'
import Navbar from '../Components/Navbar'

const Admin = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-between"}}>
    <Sidebar/>
    <div>
    <Navbar/>
    <MainContentArea/>
    </div>
    
    </div>
  )
}

export default Admin
