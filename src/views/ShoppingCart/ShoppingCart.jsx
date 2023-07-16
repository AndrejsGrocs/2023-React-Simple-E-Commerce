import React, {useContext} from 'react'
import { PRODUCTS } from "../../products";
import {ShopContext} from "../../Context/context"
import {CartItem} from "../ShoppingCart/CartItem"

export default function Page1() {
  const {cartItems} =useContext(ShopContext)
  return (
    <>
    <div className='page-1-body'>
      <h1 className='p1-h1'>Shopping Cart</h1>

      <div>
      <div className='cart-items'>

{/* //! Products list
//! Displaying products only are added to cart */}
{PRODUCTS.map((product)=>{
  {/* //! !==0 means that this id is greater than 0 */}
  if (cartItems[product.id] !== 0){
    return <CartItem data = {product}/>
  }


})}

</div>
      </div>
      
    </div>

 
    </>
  )
}
