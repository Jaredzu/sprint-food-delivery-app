import React from 'react'


const RestaurantsList = ({ list }) => {
    return (
        <>
            
            {
                list && list.map(({ banner, name, stars, schedule }) => (

                    <div className='restaurants-section mb-3'key= {name}>
                        <div className="restaurant d-flex mb-2 align-items-center">
                            <img className='mx-1 rounded-3' src={banner} alt="restaurant reference image" />
                            <div className="restaurant-info">
                                <h5 className='restaurant-info-title mb-0'>{name}</h5>
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