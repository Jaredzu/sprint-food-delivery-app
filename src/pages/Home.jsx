import React, { useContext, useEffect, useState } from 'react'
import { Navigate } from 'react-router'
import RestaurantsList from '../components/RestaurantsList'
import { auth, restaurantsContext } from '../context'
import '../styles/Home.sass'

const Home = () => {

  const { user } = useContext(auth.authContext)

  const { getRestaurants, rest } = useContext(restaurantsContext.restaurantsContext)

	useEffect(() => {
		if (!rest) {
			getRestaurants()
		}
	}, [rest])

    console.log(rest, "DESDE HOME");

  return (<>
    {
      user ? (
        <>
          <div className="home-container h-100">
            <div className="ubication d-flex flex-row">
              <i className="fa-solid fa-location-dot m-0 p-2"></i>
              <div>
                <span className='mx-2 deliver'>DELIVER TO</span>
                <p>882 Well St, New-York <i className="fa-solid fa-chevron-down"></i></p>
              </div>
            </div>
            <div className="promotion">
              <img src="https://res.cloudinary.com/dif29zscp/image/upload/v1676235799/food-app-delivery-s4/Promotions/Promo_1_hwfa6z.png" alt="" />
            </div>

            <RestaurantsList list={rest} />

          </div>
        </>
      ) :
        (
          <Navigate to='/login' />
        )
    }
  </>
  )
}

export default Home