import React, { useState, useContext } from 'react'
import { ShopContext } from "../../Context/context"


export const Product1 = (props) => {
  const { id, productName, category, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext)
  const [popup, setPopup] = useState(false);
  const [imageSrc, setImageSrc] = useState(productImage);


  //! variable amount of items with specific id
  const cartItemAmount = cartItems[id]

  const togglePopup = () => {
    setPopup(!popup);
  };



  return (
    <>
        {popup && (
          <div className="dialog">
            <div className="dialog-content">
            <button onClick={togglePopup} className="close-icon">&times;</button>
              
              <img className='popup-image' src={imageSrc} alt="Popup Image" />
              
            </div>
          </div>
        )}

      <div className='product'>





        <img src={productImage} onClick={togglePopup} className='product-img'  ></img>
        <div className='product-description'>

          <p>{productName}</p>
          <p>Category: {category}</p>
          <p>Price: <b>{price}</b> EUR</p>
          <button className='add-to-cart-button' onClick={() => addToCart(id)}>
            {/* //! Shows the amound of cartitems if cartitems > than 0 */}
            Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
          </button>
        </div>




      </div>

    </>





  )
}
