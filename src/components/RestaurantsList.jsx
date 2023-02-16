import React from 'react'


const RestaurantsList = ({ list }) => {

    console.log(list, "LISTAAAAAA");
    return (
        <>
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

            {
                list && list.map(({ banner, name, stars, schedule }) => (

                    <div className='restaurants-section mb-5'>
                        <div className="restaurant d-flex mb-2">
                            <img className='mx-1 rounded-3' src={banner} alt="" />
                            <div className="restaurant-info">
                                <h6 className='restaurant-info-title mb-0'>{name}</h6>
                                <p className='restaurant-info-stars mb-0'>{stars}</p>
                                <p className='restaurant-info-schedule mb-0 '>Work time: {schedule}</p>
                            </div>
                        </div>
                    </div>

                ))
            }
        </>
    )
}

export default RestaurantsList