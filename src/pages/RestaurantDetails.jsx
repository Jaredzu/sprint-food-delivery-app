import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

import { restaurantsContext, dishesContext } from '../context'


const RestaurantDetails = () => {

    const { id } = useParams()

    const { getRestaurantDetail, currentRest, setCurrentRest } = useContext(restaurantsContext.restaurantsContext)
    const { getDishes, dishesCon } = useContext(dishesContext.dishesContext)

    useEffect(() => {

        if (id) {
            setCurrentRest(null)
            getRestaurantDetail(id)
            getDishes(id)
        }
    }, [id])

    console.log(currentRest, "CURRENT REST DETAILS");
    console.log(dishesCon, "DISHESCON DETAIL");


    return (

        <>
            {
                currentRest ? (
                    <>
                        <Link to={"/"}>
                            <i className="fa-solid fa-chevron-left m-3"></i>
                        </Link>
                        <div className="restaurant-detail">
                            <div className="restaurant d-flex mb-2 align-items-center">
                                <img className='mx-1 rounded-3' src={currentRest.banner} alt="restaurant reference" />
                                <div className="restaurant-info mx-3">
                                    <h5 className='restaurant-info-title mb-0'>{currentRest.name}</h5>
                                    <p className='restaurant-info-description mb-0 fw-lighter'>{currentRest.description}</p>
                                    <p className='restaurant-info-stars mb-0'>{currentRest.stars}</p>
                                    <p className='restaurant-info-schedule mb-0 fw-lighter'>Work time: {currentRest.schedule}</p>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <h1>Perate weee, ya te aviso amigue</h1>
                )
            }

        </>
    )
}

export default RestaurantDetails