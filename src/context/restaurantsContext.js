import { useState, createContext } from "react";
import { restaurants } from "../api";

export const restaurantsContext = createContext()

export const RestaurantsProvider = ({ children }) => {

    const [rest, setRest] = useState(null)

    const getRestaurants = async () => { 
        try {

            const restaurantsApi = await restaurants.getRestaurants()

            setRest(restaurantsApi.restaurants)
            
        } catch (error) {
            console.log("Error getRestaurants", error.message);
        }
    }

    return (
        <>
            <restaurantsContext.Provider value={{ getRestaurants, rest}}>
                {children}
            </restaurantsContext.Provider>
        </>
    
    )
}

