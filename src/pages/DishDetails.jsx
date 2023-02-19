import React, { useContext, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { dishesContext } from '../context'
import logoLoading from "../logos/Splash screen.png"
import DishDetail from "../components/DishDetail"




const DishDetails = () => {
    const { Rid, Did } = useParams()
    const LINK_ADDRESS = `/restaurantDetails/${Rid}`

    const { getDishDetail, currentDish, setCurrentDish } = useContext(dishesContext.dishesContext)


    useEffect(() => {

        if (Did) {
            setCurrentDish(null)
            getDishDetail(Rid, Did)
        }
    }, [Did])

    console.log("CURRENT DISH", currentDish);

    return (
        <>
            {
                currentDish ? (
                    <>
                        <Link to={LINK_ADDRESS}>
                            <i className="fa-solid fa-chevron-left m-3"></i>
                        </Link>
                        <DishDetail currentDish={currentDish} />
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

export default DishDetails