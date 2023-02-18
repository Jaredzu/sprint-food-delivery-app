import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Navbar } from "./layout";
import { Home, Search, Profile, Orders, Login, RestaurantDetails } from "./pages"

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Navbar />} >
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/profile" element={<Profile />} />
            </Route>id
            <Route path="/restaurantDetails/:id/*" element={<RestaurantDetails />} />
        </>
    )
)