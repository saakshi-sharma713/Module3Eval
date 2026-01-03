import React, { useContext } from 'react'
import UpdatePage from '../Pages/UpdatePage'
import { Navigate, useNavigate } from 'react-router-dom'
import { RestaurantContext } from '../Context/Restraurant'

const CustomerCard = ({data,index}) => {
const {deleteData} = useContext(RestaurantContext);
const navigate = useNavigate();
const handleUpdate=()=>{

    navigate("/admin/restaurant/update")
}
const handleDelete =(id,index)=>{
     deleteData(id);
}
  return (
    <div style={{width:"60%"}}>
      <img src={data.image} width="300"/>
      <h3>{data.restaurantName}</h3>
      <h3>{data.address}</h3>
      <h3>{data.type}</h3>
      <h3>Parking : {data.parkingLot}</h3>
      </div>
      )
    }
      export default CustomerCard;