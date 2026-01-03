import React, { useContext } from 'react'
import { RestaurantContext } from '../Context/Restraurant'

const MainContentArea = () => {
    const restaurants = useContext(RestaurantContext);

  return (
    <div>
      {
        restaurants.map((restaurant)=>(
            <Card data={restaurant}/>
        ))
      }
    </div>
  )
}

export default MainContentArea
