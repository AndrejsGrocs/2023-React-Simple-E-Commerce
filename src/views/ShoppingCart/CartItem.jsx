import React from 'react'

export const CartItem = (props) => {
    const {id, productName, price, productImage} = props.data;

  return (
    <div className='cart-item'>
    <img className='product-img' src={productImage}></img>
    <div className='description'>
    <p>{productName}</p>
    <p>{price}</p>


    </div>

    </div>
  )
}
