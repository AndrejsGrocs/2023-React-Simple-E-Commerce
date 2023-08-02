import React, { useContext } from 'react'
import {ShopContext} from "../../Context/context"

export const Product1 = (props) => {
    const {id, productName, category, price, productImage} = props.data;
    const {addToCart, cartItems} =useContext(ShopContext)

    //! variable amount of items with specific id
    const cartItemAmount = cartItems[id]

  return (
   
    <div className='product'>
    <img className='product-img' src={productImage} ></img>
    <div className='product-description'>
   
    <p>{productName}</p>
    <p>Category: {category}</p>
      <p>Price: <b>{price}</b> EUR</p>
      <button className='add-to-cart-button' onClick={()=>addToCart(id)}>
      {/* //! Shows the amound of cartitems if cartitems > than 0 */}
      Add To Cart {cartItemAmount>0 && <>({cartItemAmount})</>}
      </button>
    </div>
  
    
    </div>
  
    
  )
}
