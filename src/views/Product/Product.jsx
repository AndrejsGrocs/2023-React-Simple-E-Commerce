import React, { useContext } from 'react'
import {ShopContext} from "../../Context/context"

export const Product1 = (props) => {
    const {id, productName, price, productImage} = props.data;
    const {addToCart} =useContext(ShopContext)

  return (
    <div className='product'>
    <img className='product-img' src={productImage} ></img>
    <div className='product-description'>
   
    <p>{productName}</p>
      <p>Price <b>{price}</b> EUR</p>
      <button className='add-to-cart-button' onClick={()=>addToCart(id)}>Add To Cart</button>
    </div>
  
    
    </div>
    
  )
}
