import React from 'react'

const Card = ({data}) => {

    
  return (
    <div>
      <img src={data.image} width="100"/>
      <h3>{data.restaurantName}</h3>
      <h3>{data.address}</h3>
      <h3>{data.type}</h3>
      <h3>Parking : {data.parkingLot}</h3>
      <button onClick={()=> handleUpdate()}>Update</button>
      <button>Delete</button>
    </div>
  )
}

export default Card
