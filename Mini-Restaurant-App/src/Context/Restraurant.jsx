import React, { createContext, useEffect, useState } from 'react'
export const RestaurantContext = createContext();
const Restraurant = ({children}) => {
    const [restaurants,setRestaurant] = useState(()=>{ 
     const status = localStorage.getItem("evalData"); 
        return status ? JSON.parse(status) : []
    }       
)


useEffect(()=>{
    localStorage.setItem("evalData",JSON.stringify(restaurants));
},[restaurants])

const addRestaurant = (data)=>{
    setRestaurant((prev)=> [...prev,{...data,Id:Date.now(),image: "https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg"}]) 
}

const deleteData = (id,idx)=>{
    localStorage.removeItem(idx);
 setRestaurant(restaurants.filter((data)=>(data.id !=id)))
}
console.log(restaurants)
  return (
    <div>
      <RestaurantContext.Provider value={{addRestaurant,restaurants,deleteData}}>
{children}
      </RestaurantContext.Provider>
    </div>
  )
}

export default Restraurant
