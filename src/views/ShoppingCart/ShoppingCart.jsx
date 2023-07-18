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
      <div className="page-1-body">
        <h1 className="p1-h1">Shopping Cart</h1>

        <div>
          <div className="cart-items">
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
          {/* //Here is the logic if total amount >0 and exists he will show the data or show the info that 'Your cart is empty'*/}
          {totalAmount > 0 ? (
            <div className="checkout">
              <p>Subtotal: EUR{totalAmount}</p>
              <button onClick={() => navigate("/")}>Continue Shopping</button>
              <button>Checkout</button>
            </div>
          ) : (
            <p>Your cart is empty</p>
          )}
        </div>
      </div>
    </>
  );
}
