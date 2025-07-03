import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext'
export const PlaceOrder = () => {


  const { getTotalCartAmount } = useContext(StoreContext)
  return (
    <div className='order'>
      <form action="" className='form'>
        <h1>Form</h1>

        <div className="multi-field" >
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
        </div>
        <input type="text" placeholder='Enter Phone Number' />
        <input type="text" placeholder='Street' />
        <div className="multi-field">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className="multi-field">
          <input type="text" placeholder='pin Code' />
          <input type="text" placeholder='Country' />
        </div>

        <input type="email" placeholder='Enter Email ' />





      </form>
      <div className="cart-total order-cart">
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
        <button className='make-payment' >Make Payment</button>
      </div>
    </div>
  )
}
export default PlaceOrder;