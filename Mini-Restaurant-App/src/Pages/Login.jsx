import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const[formData,setData] = useState({ 
        email:"",
        password:""
    })
    const navigate = useNavigate();
    function handleChnage(e){
        const {name,value} = e.target;
        setData((prev)=> ({...prev,[name]:value}))
    }
    function handleSubmit(e){
        e.preventDefault();
        console.log(formData)
        if(formData.email== "admin@gmail.com" && formData.password=="admin1234"){
             localStorage.setItem("isLoggedin","Admin");
             navigate("/admin/dashboard");
             
        }
        else if(formData.email =="customer@gmail.com" && formData.password=="customer1234"){
              localStorage.setItem("isLoggedin","Customer");
             navigate("/customer/dashboard");
        }
        else{
            alert("Wrong email or password");
            navigate("/login");
        }
    }
  return (
    <div>
        <form onSubmit={(e)=>{handleSubmit(e)}}>
<input type="email" value={formData.email} name="email" onChange={(e)=>{handleChnage(e)}}/>
      <input type="password" name="password" value={formData.password} onChange={(e)=>{handleChnage(e)}}/>
      <button>Login</button>
        </form>
      
    </div>
  )
}

export default Login
