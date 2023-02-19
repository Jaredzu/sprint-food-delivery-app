import React from 'react'

const DishDetail = ({ currentDish }) => {
    return (
        <>
            <img src={currentDish.image} alt="dish reference" />
            <div>
                <div>
                    <h3>{currentDish.name}</h3>
                    <p><i className="fa-regular fa-clock"></i> {currentDish.cookingTime}</p>
                </div>
                <p>{currentDish.description}</p>
                
                <div className='d-flex btns-dish-info'>
                <div className="input-group rounded-2 ">
                    <button className="btn">+</button>
                    <input type="text" className="form-control" />
                    <button className="btn">-</button>
                </div>
                <button className='btn btn-warning d-flex justify-content-around btn-add'><span className='add-text-dish'>Add</span> ${currentDish.price}
                </button>
            </div>

            </div>
        </>
    )
}

export default DishDetail