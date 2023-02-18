import { createContext, useState } from "react";
import { dishes } from "../api";

export const dishesContext = createContext()

export const DishesProvider = ({ children }) => {

    const [dishesCon, setDishesCon] = useState(null)

    const getDishes = async (restaurantId) => {
        try {

            const dishesApi = await dishes.getDishes(restaurantId)

            setDishesCon(dishesApi.dishes)

            
        } catch (error) {
            console.log("Error getDishes", error.message);
        }
        
    }
    console.log(dishesCon, "CONTEXT");

    return (
        <>
        
            <dishesContext.Provider value={{getDishes, dishesCon }}>
                {children}
            </dishesContext.Provider>
            
        </>
    )



}