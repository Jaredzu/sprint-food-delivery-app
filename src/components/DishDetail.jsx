import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { dishesContext } from '../context'

const DishDetail = ({ currentDish }) => {

    const { order, setOrder } = useContext(dishesContext.dishesContext)
    const [quantity, setQuantity] = useState(1)
    const [totalPrice, setTotalPrice] = useState(currentDish.price)

    let navigate = useNavigate()

    const addQuantity = () => {
        setQuantity(quantity + 1)
    }

    const minusQuantity = () => {
        if (quantity > 1) setQuantity(quantity - 1)
    }

    const addToCart = () => {

        let newOrder = {
            name: currentDish.name,
            image: currentDish.image,
            totalPrice: totalPrice,
            category: currentDish.category,
            quantity: quantity,
            id: currentDish.id
        }
        setOrder(order => [...order, newOrder])

        navigate("/orders")

    }

    useEffect(() => {
        setTotalPrice(currentDish.price * quantity)
    }, [quantity])


    return (
        <>
            <img className='rounded-3 m-auto mb-4' width={"90%"} src={currentDish.image} alt="dish reference" />
            <div>
                <div className='d-flex justify-content-between mx-2'>
                    <h3>{currentDish.name}</h3>
                    <p><i className="fa-regular fa-clock"></i> {currentDish.cookingTime}</p>
                </div>
                <p className='mx-2'>{currentDish.description}</p>

                <div className='d-flex btns-dish-info'>
                    <div className="row mx-2">
                        <div className='input-group bg-body-tertiary rounded-2 col'>
                            <button className="btn" onClick={minusQuantity}>-</button>
                            <input disabled type="number" value={quantity} className="form-control bg-body-tertiary border-0" />
                            <button className="btn" onClick={addQuantity}>+</button>
                        </div>
                        <div className="col-2"></div>
                        <button className='col-5 btn btn-warning d-flex justify-content-around btn-add' onClick={addToCart}><span className='add-text-dish'>Add</span>$ {totalPrice}</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default DishDetail