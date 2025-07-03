import React, { useContext } from 'react'
import "./Cart.css"
import { StoreContext } from '../../Context/StoreContext'
import { useNavigate } from 'react-router-dom'
export const Cart = () => {

    const { foodList, cartItems, removeFromCart, getTotalCartAmount } = useContext(StoreContext)
    const navigate = useNavigate();

    return (
        <div className='Cart'>

            <div className="cart-table cart-table-title">
                <li>Item ID</li>
                <li>items</li>
                <li>Title</li>
                <li>price</li>
                <li>Quantity</li>
                <li>Total</li>
                <li>Remove</li>
            </div>
            <br />
            <hr />
            {foodList.map((item, index) => {


                if (cartItems[item.id] > 0) {
                    // setTotalAmount(totalAmount + item.price * cartItems[item.id])
                    return (
                        <div>
                            <div className='table-content cart-table' key={item.id}>

                                <p>{index}</p>
                                <img src={item.image} alt="" className='cart-item-img' />
                                <p>{item.name}</p>
                                <p>{item.price}</p>
                                <p>{cartItems[item.id]}</p>
                                <p>{item.price * cartItems[item.id]}</p>

                                <button onClick={() => removeFromCart(item.id)} className='remove-button'>
                                    <p>&times;</p>
                                </button>


                            </div>
                            <hr />
                        </div>

                    )

                }
            })}

            <div className="cart-bottom">
                <div className="cart-total">
                    <h1>Cart Totals</h1>
                    <div className="cart-total-details">
                        <p>Subtotal</p>
                        <p>{getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cart-total-details">
                        <p>Delivery</p>
                        <p>{getTotalCartAmount()}+50</p>
                    </div>
                    <hr />

                    <div className="cart-total-details">
                        <p>Total</p>
                        <p>{getTotalCartAmount() + 50}</p>

                    </div>
                    <hr />
                    <button onClick={()=>navigate('./order')}>Proceed to CheckOut</button>
                </div>

                <div className="cart-bottom-right">
                    <div className="promo-code">
                        <p>Enter Promo Code</p>
                        <input type="text" placeholder='Enter Promo code Number' />
                        <button>Submit</button>
                    </div>
                </div>

            </div>






        </div>
    )
}
export default Cart;