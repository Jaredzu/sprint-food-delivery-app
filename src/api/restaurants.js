import {

    collection,
    addDoc,
    getDocs

} from "firebase/firestore";

import { db } from "./firebase"

// CRUD RESTAURANTS

const dbCollection = collection(db, "restaurants") 

export const getRestaurants = async () => {
    const firebaseRestaurants = await getDocs(dbCollection)
    
    const restaurants = []
    
  firebaseRestaurants.docs.forEach(d => {
    const rest = d.data()
    rest.id = d.id
    restaurants.push(rest)
      /*     data.push(doc.data({...user, id})) */
  })
    console.log(restaurants, "GET RESTAURANTS");
  return { restaurants }
}

export const createRestaurant = async (restaurant) => await addDoc(dbCollection, restaurant)