import React from 'react'

const UpdatePage = () => {
  return (
    <div>
      <form onSubmit={(e)=>{handleSubmit(e)}}  className='Side-Form'>
      <input type="text" name="restaurantName" value={formData.restaurantName} onChange={(e)=>{handleChange(e)}}
      placeholder="Enter Restaurant name"/>
      <input type="text" name="address" value={formData.address} onChange={(e)=>{handleChange(e)}}
      placeholder="Enter Address"/>
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
</form>
    </div>
  )
}

export default UpdatePage
