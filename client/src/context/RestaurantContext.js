import React,{useState,createContext, useEffect} from 'react'

export const RestaurantContext = createContext();

export const RestaurantProvider = ({children}) => {
    const [restaurants,setRestaurants] = useState([]);
    const addRestaurant = (restaurant) => {
        //console.log(restaurant);
        setRestaurants([...restaurants,restaurant])
    }
    useEffect (() => {
        // This code will run whenever `restaurants` changes
        console.log(restaurants);
      }, [restaurants]);
      

    return(
        <RestaurantContext.Provider value={{restaurants,setRestaurants, addRestaurant}}>
            {children}
        </RestaurantContext.Provider>
    )
}
