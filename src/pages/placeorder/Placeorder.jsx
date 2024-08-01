import { useContext } from 'react'
import './Placeorder.css'
import { Storecontext } from '../../Context/Storecontext'

export default function Placeorder() {
  const {gettotalcartamount}=useContext(Storecontext);

  return (
    <form className='placeorder'>
      <div className="placeorder-left">
        <p className='title'>Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First name' /><input type="text" placeholder='Last name' />
        </div>
        <input type="email" placeholder='email address' /><input type="text" placeholder='Street' />
        <div className="multi-fields">
          <input type="text" placeholder='city' /><input type="text" placeholder='state' />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip Code' /><input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='Phone' />

      </div>
      <div className="placeorder-right">
      <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹{gettotalcartamount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p></p>₹{20}
            </div>
            <div className="cart-total-details">
              <b>Total</b>
              <b>₹{gettotalcartamount()+20}</b>
            </div>
          </div>

          <button >PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}
