import React from "react";
import {PRODUCTS} from "../../products"
import {Product1} from '../Product/Product'


export default function Landing() {
    return (
      
        
          <div>
            <div className='landing-body'>
            <h1 className='lp-h1'>React Shop</h1>
            </div>
            <div className="products-section">
         
              {PRODUCTS.map((product)=> 

              <Product1 data={product}/>)}
            <div>
      
            </div>

          </div>
        
          
           
        
          </div>

      

  
  
    );
  }