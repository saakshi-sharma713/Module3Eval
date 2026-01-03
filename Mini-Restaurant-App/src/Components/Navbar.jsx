import React from 'react'

const Navbar = () => {
      const[formData,setData] = useState({ 
                
                type:"",
               parkingLot:"",
            });

 function handleChange(e){
        const {name,value} = e.target;
        setData((prev)=> ({...prev,[name]:value}))
    }  
  return (
    <div>
      <input type="text" />
      <select name="type"  onChange={(e)=>{handleChange(e)}}>
        <option>Select Food Type</option>
        <option value="Rajasthani">Rajasthani</option>  
        <option value="Gujarati">Gujarati</option>
        <option value="Mughlai">Mughlai</option>
        <option value="Jain">Jain</option>
        <option value="Thai">Thai</option>
        <option value="North Indian">North Indian</option>
        <option value="South Indian">South Indian</option>
      </select>
     <select name="parkingLot"  onChange={(e)=>{handleChange(e)}}> 
        <option>Select Parking</option>
        <option value="Yes"> Parking Yes</option>
        <option value="No"> Parking No</option>
      </select>
    </div>
  )
}

export default Navbar
