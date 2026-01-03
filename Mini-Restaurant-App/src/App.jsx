import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Pages/Login'
import { Route, Routes } from 'react-router-dom'
import Admin from './Pages/Admin'
import Customer from './Pages/Customer'
import ProtectedRoute from './Pages/ProtectedRoute'
import CustomerProtectedRoute from './Pages/CustomerProtectedRoute'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/admin/dashboard" element={<ProtectedRoute>
          <Admin/>
        </ProtectedRoute>}/>
        <Route path="/customer/dashboard" element={<ProtectedRoute>
          <Customer/>
        </ProtectedRoute>}/> 
       </Routes>
    </>
  )
}

export default App
