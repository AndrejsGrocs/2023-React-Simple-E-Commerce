import React from 'react'

export const Product1 = (props) => {
    const {id, productName, price, productImage} = props.data

  return (
    <div className='product'>
    <img className='product-img' src={productImage} ></img>
    <div className='product-description'>
   
    <p>{productName}</p>
      <p>Price <b>{price}</b> EUR</p>
      <button className='add-to-cart-button'>Add To Cart</button>
    </div>
  
    
    </div>
    
  )
}
