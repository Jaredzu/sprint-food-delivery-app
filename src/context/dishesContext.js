import { createContext, useState } from "react";
import { dishes } from "../api";

export const dishesContext = createContext()

export const DishesProvider = ({ children }) => {

    const [dishesCon, setDishesCon] = useState(null)

    const [currentDish, setCurrentDish] = useState(null) // JUST ONE DISH

    const getDishes = async (restaurantId) => {
        try {

            const dishesApi = await dishes.getDishes(restaurantId)

            setDishesCon(dishesApi.dishes)
      
        } catch (error) {
            console.log("Error getDishes", error.message);
        }
        
    }

    const getDishDetail = async (_restaurantId, _dishId) => { 
        try {

            const dishDetailApi = await dishes.getDishDetail(_restaurantId, _dishId)

            setCurrentDish(dishDetailApi.data)
            
        } catch (error) {
            console.log("Error getDishes", error.message);
        }

    }


    return (
        <>
        
            <dishesContext.Provider value={{getDishes, dishesCon, getDishDetail, currentDish, setCurrentDish}}>
                {children}
            </dishesContext.Provider>
            
        </>
    )



}