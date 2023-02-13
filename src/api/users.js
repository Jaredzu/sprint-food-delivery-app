import {

    collection,
    addDoc,

} from "firebase/firestore";

import { db } from "./firebase"

// CRUD USERS

const userCollection = collection(db, "users")


export const createUser = async (user) => await addDoc(userCollection, user)