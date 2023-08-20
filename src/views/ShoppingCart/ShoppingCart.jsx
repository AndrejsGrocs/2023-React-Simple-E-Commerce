import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../Context/context";
import { CartItem } from "../ShoppingCart/CartItem";

export default function Page1() {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();
  return (
    <>
      <div className="shopping-cart-body">
        <h1 className="sc-h1">Shopping Cart</h1>

        <div>
          <div className="cart-items-container">
            {/* //! Products list
            //! Displaying products only are added to cart */}
            {PRODUCTS.map((product) => {
              {
                /* //! !==0 means that this id is greater than 0 */
              }
              if (cartItems[product.id] !== 0) {
                return <CartItem data={product} />;
              }
            })}

          </div>
          
          <div className="checkout-container">
            
                   {/* //Here is the logic if total amount >0 and exists he will show the data or show the info that 'Your cart is empty'*/}
          {totalAmount > 0 ? (
            <div className="checkout">
              <p className="subtotal-text">Subtotal:  {totalAmount} EUR</p>
              <div className="button-container">
              <button className="add-to-cart-button" onClick={() => navigate("/")}>Continue Shopping</button>
              <button className="add-to-cart-button">Checkout</button>
              </div>
            </div>
          ) : (
            <p className="empty-cart-text">Your cart is empty</p>
          )}
          </div>
   
        </div>
      </div>
    </>
  );
}
