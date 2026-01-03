import React, { createContext, useEffect, useState } from 'react'
export const RestaurantContext = createContext();
const Restraurant = ({children}) => {
    const [restaurants,setRestaurant] = useState(()=>{ 
     const status = localStorage.getItem("evalData"); 
        return status ? JSON.parse("evalData") : []
    }       
)

useEffect(()=>{
    localStorage.setItem("evalData",JSON.stringify(restaurants));
})

const addRestaurant = (data)=>{
    setRestaurant((prev)=> [...prev,{...data,Id:Date.now(),image: "https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg"}]) 
}

console.log(restaurants)
  return (
    <div>
      <RestaurantContext.Provider value={{addRestaurant,restaurants}}>
{children}
      </RestaurantContext.Provider>
    </div>
  )
}

export default Restraurant
