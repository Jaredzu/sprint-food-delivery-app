import {

    collection,
    addDoc,

} from "firebase/firestore";

import { db } from "./firebase"

// CRUD USERS


export const createDish = async (dish, restaurantId) => {
    
    const dbCollection = collection(db, `Restaurants/${restaurantId}/platos`) // CAMBIAR NOMBREEEE

    await addDoc(dbCollection, dish)

}