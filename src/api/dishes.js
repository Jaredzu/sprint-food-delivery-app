import {

    collection,
    addDoc,
    getDocs

} from "firebase/firestore";

import { db } from "./firebase"

// CRUD DISHES

export const getDishes = async (restaurantId) => {

    const dbCollection = collection(db, `restaurants/${restaurantId}/dishes`)

    const firebaseDishes = await getDocs(dbCollection)
    
    const dishes = []
    
  firebaseDishes.docs.forEach(d => {
    const dish = d.data()
    dish.id = d.id
    dishes.push(dish)
      /*     data.push(doc.data({...user, id})) */
  })

  console.log(dishes, "API");

  return { dishes }
}

export const createDish = async (dish, restaurantId) => {
    
    const dbCollection = collection(db, `restaurants/${restaurantId}/dishes`)

    await addDoc(dbCollection, dish)

}