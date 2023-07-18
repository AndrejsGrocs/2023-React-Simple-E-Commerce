import React, {useContext} from 'react'
import {ShopContext} from "../../Context/context"

export const CartItem = (props) => {
    const {id, productName, price, productImage} = props.data;
    const {cartItems, addToCart, removeFromCart, updateCartItemCount } =useContext(ShopContext)

  return (
    <div className='cart-item'>
    <img className='product-img' src={productImage}></img>
    <div className='description'>
    <p>{productName}</p>
    <p>{price}</p>
    <div className='count-handler'>
    <button onClick={()=>removeFromCart(id)}>-</button>
    {/* //! cartItems[id] shows the amount of every product in every inputfield */}
    {/* //! (Number(e.target.value) converting string to number */}
    <input value={cartItems[id]} onChange={(e)=> updateCartItemCount(Number(e.target.value),id)}/>
    <button onClick={()=>addToCart(id)}>+</button>

    </div>


    </div>

    </div>
  )
}
