import React, {useContext} from 'react'
import {ShopContext} from "../../Context/context"

export const CartItem = (props) => {
    const {id, productName, price, productImage} = props.data;
    const {cartItems, addToCart, removeFromCart, updateCartItemCount } =useContext(ShopContext)

  return (
    <div className='cart-item'>
    <div className='cart-item-image-section'>
    <img className='cart-item-img' src={productImage}></img>

    </div>
    
    <div className='description'>
    <p>{productName}</p>
    <p><b>{price} EUR</b></p>



    </div>
    <div className='count-handler'>
    <button className='cart-item-button' onClick={()=>removeFromCart(id)}>-</button>
    {/* //! cartItems[id] shows the amount of every product in every inputfield */}
    {/* //! (Number(e.target.value) converting string to number */}
    <input className='c_i_input' value={cartItems[id]} onChange={(e)=> updateCartItemCount(Number(e.target.value),id)}/>
    <button className='cart-item-button'  onClick={()=>addToCart(id)}>+</button>

    </div>

    </div>
  )
}
