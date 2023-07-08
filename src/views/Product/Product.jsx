import React from 'react'

export const Product1 = (props) => {
    const {id, productName, price, productImage} = props.data

  return (
    <div>{productName}</div>
  )
}
