import {

    collection,
    setDoc,
    doc,
    getDoc

} from "firebase/firestore";

import { db } from "./firebase"

// CRUD USERS

const dbCollection = collection(db, "users")


export const createUser = async (user, id) => await setDoc(doc(dbCollection, id), user)

//setDoc(doc(basededatos, colleccion, id), data)

export const getUserDetails = async (_id) => {

    const snapshot = await getDoc(doc(dbCollection, _id))
    const user = snapshot.data()
    user.id = snapshot.id
    return { data: user }
  
  }