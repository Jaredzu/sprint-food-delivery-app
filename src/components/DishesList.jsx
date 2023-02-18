import React from 'react'

const DishesList = ({ dishesCon }) => {
    return (
        <>
            <div className='restaurant-dishes container row'>
                {dishesCon &&
                    dishesCon.map(({ name, price, image, id }) => (
                        <div
                            className='dish col-5 mb-2 mx-auto align-items-center'
                            key={id}
                        >
                            <img className='rounded-3' src={image} alt='dish reference' />
                            <div className='dish-info'>
                                <h6 className='info-title mb-0'>{name}</h6>
                                <p className='info-price mb-0 text-body-tertiary'>Price: ${price}</p>
                            </div>
                        </div>
                    ))}
            </div>
        </>
    )
}

export default DishesList
