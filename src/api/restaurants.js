import {

    collection,
    addDoc,

} from "firebase/firestore";

import { db } from "./firebase"

// CRUD USERS

const dbCollection = collection(db, "Restaurants") // CAMBIAR NOMBREEEE


export const createRestaurant = async (restaurant) => await addDoc(dbCollection, restaurant)