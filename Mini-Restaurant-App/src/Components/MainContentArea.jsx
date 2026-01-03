import React, { useContext } from 'react'
import { RestaurantContext } from '../Context/Restraurant'
import Card from './Card';

const MainContentArea = () => {
    const {restaurants} = useContext(RestaurantContext);

  return (
    <div className="card-container">
      {
        restaurants.map((restaurant,idx)=>(
            <Card data={restaurant} key={idx} index={idx}/> 
        ))
      }
    </div>
  )
}

export default MainContentArea
