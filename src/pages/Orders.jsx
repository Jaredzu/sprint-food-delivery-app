import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { dishesContext } from '../context'
import noOrders from '../logos/noOrders.png'

const Orders = () => {

  const { order, setOrder } = useContext(dishesContext.dishesContext)

  const handleDelete = () => setOrder([])


  if (order.length === 0) {
    return (
      <div className='d-flex flex-column'>
        <h1 className='text-center m-3'>Not Orders yet</h1>
        <img className='m-5' src={noOrders} alt="" />
        <Link to={"/"} className="btn btn-warning">
          Go to add some order
        </Link>
      </div>

    )
  }

  return (
    <>
      <h4 className='text-center m-3'>Your Orders</h4>
      <div className='mb-5'>
        {
          order && order.map(dish => (
            <div key={dish.id} className='restaurants-section mb-3'>
              <div className="restaurant d-flex mb-2 align-items-center">
                <img className='mx-1 rounded-3' src={dish.image} width={"25%"} alt="dish reference" />
                <div className="restaurant-info mx-2">
                  <h6 className='restaurant-info-title mb-0'>{dish.name}</h6>
                  <span className='restaurant-info-title mb-0'>x {dish.quantity}</span>
                  <p className='restaurant-info-schedule mb-0 text-body-tertiary'>Total Price: $ {dish.totalPrice}</p>
                </div>
              </div>
            </div>
          ))
        }
        <div className='text-center'>
          <button className='btn btn-danger m-2' onClick={handleDelete}>Delete all your orders</button>
        </div>
      </div>
    </>
  )
}

export default Orders