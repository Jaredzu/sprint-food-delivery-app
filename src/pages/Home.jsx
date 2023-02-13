import React, { useContext } from 'react'
import { Navigate } from 'react-router'
import { auth } from '../context'
import '../styles/Home.sass'

const Home = () => {

  /*   const { user } = useContext(auth.authContext)
   */
  return (<>
    {
      /*   user ? ( */
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
          <p className=''>
            Restaurants and cafes
          </p>
          <div className="filter-btns d-flex mb-2 w-100">
            <button className="filter-btn btn m-1">All</button>
            <button className="filter-btn btn m-1">🍔 Burgir</button>
            <button className="filter-btn btn m-1">🍕 Pizza</button>
            <button className="filter-btn btn m-1">🥗 Salad</button>
            <button className="filter-btn btn m-1">🍝 Pasta</button>
          </div>
          <div className='restaurants-section mb-5'>
            <div className="restaurant d-flex mb-2">
              <img className='mx-1 rounded-3' src="https://res.cloudinary.com/dif29zscp/image/upload/v1676259696/food-app-delivery-s4/Restaurants/Img_f00p5m.png" alt="" />
              <div className="restaurant-info">
                <h6 className='restaurant-info-title mb-0'>Pardes Restaurant</h6>
                <p className='restaurant-info-stars mb-0'>⭐⭐⭐⭐</p>
                <p className='restaurant-info-schedule mb-0 '>Work time: 9:30 - 23:00</p>
                <p className='restaurant-info-price mb-0'>Price: 4$</p>
              </div>
            </div>
          </div>
        </div>
      </>
      /*   ) :
          (
            <Navigate to='/login' />
          ) */
    }
  </>
  )
}

export default Home