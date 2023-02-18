import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { restaurantsContext, dishesContext } from '../context'
import RestDetails from '../components/RestDetails'
import DishesList from '../components/DishesList'
import "../styles/RestaurantDetails.sass"
import logoLoading from "../logos/Splash screen.png"



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

    return (

        <>
            {
                currentRest ? (
                    <>
                        <Link to={"/"}>
                            <i className="fa-solid fa-chevron-left m-3"></i>
                        </Link>

                        <RestDetails currentRest={currentRest} />

                        <h5 className='m-4'>Our Dishes:</h5>
                        
                        <DishesList dishesCon={dishesCon} />
                    </>
                ) : (
                    <div className='w-100'>
                        <img src={logoLoading} alt="" />
                    </div>
                )
            }

        </>
    )
}

export default RestaurantDetails