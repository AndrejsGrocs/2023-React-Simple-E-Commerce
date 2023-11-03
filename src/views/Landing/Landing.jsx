import React from "react";
import {PRODUCTS} from "../../products"
import {Product1} from '../Product/Product'



export default function Landing() {


    return (
      <>


      
        
          <div>
            <div className='landing-body'>
         

            <h1 className='lp-h1'>STUDIO EQUIPMENT SHOP</h1>
            
            
            
            </div>
            <div className="cards-section">
            <div className="cards-container">
         
              {PRODUCTS.map((product)=> 

              <Product1 data={product}/>)}
            <div>
      
            </div>
            </div>
            

          </div>
          <div>
                        
                        <p className="updated-data">Updated 03.11.2023</p>
                          
                        </div>



          
        
          
           
        
          </div>


          </>

      

  
  
    );
  }