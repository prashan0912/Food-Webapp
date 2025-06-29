import React, { useContext } from 'react'
// import ratingStar from '../../assets/ratingStar.png'
import './FoodItem.css'
import plus from '../../assets/plus.png'
import del from '../../assets/delete.png'
import { StoreContext } from '../../Context/StoreContext'

export const FoodItem = ({ id, name, image, price, description }) => {

    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext)
    const itemCount = cartItems[id] || 0;


    return (
        <div className='food-item'>
            <div className="food-item-image-container">
                <img src={image} alt="food" className='food-item-img' />
            </div>
            {itemCount === 0 ? (
                <img className="add-food" src={plus} alt="add" onClick={() => addToCart(id)} />
            ) : (
                <div className='food-count'>
                    <img src={plus} className='count' alt="plus" onClick={() => addToCart(id)} />
                    <p >{cartItems[id]}</p>
                    <img src={del} alt="delete" className='count' onClick={() => removeFromCart(id)} />
                </div>
            )}

            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    {/* {renderStars(rating)} */}
                </div>
                <div className="food-item-description">
                    {description}
                </div>
                <div className="food-item-price">
                    &#x20B9;  {price}
                </div>
            </div>
        </div>
    )
}
