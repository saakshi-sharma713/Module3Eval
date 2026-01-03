import React from 'react'
import Navbar from '../Components/Navbar'
import MainContentArea from '../Components/MainContentArea'
import CustomerCard from '../Components/CustomerCard'

const Customer = () => {
  return (
    <div>
      <h1>Customer</h1>
      <Navbar/>
      <div>
        <CustomerCard/>
        </div>

      
    </div>
  )
}

export default Customer
