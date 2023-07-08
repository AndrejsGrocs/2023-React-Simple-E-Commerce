import React from 'react'
import { Link } from 'react-router-dom'
import logoimg from '../../img/react_logo.png'
import instalogo from '../../img/instagram-logo.png'
import {ShoppingCart} from 'phosphor-react'


export default function Navbar() {
  return (
    <>
    
    <div className='nav'>
    <div className='logo-section'>
           <a className='company-logo' href="/" >{<img className='nav-logo-img' src={logoimg} alt='logo'></img>}</a>   
        </div>
            <ul className='nav-list'>
          
          
        {( 
            <>
            
            <li><Link to='/' activeclassname='active' className='nav-link'> Home</Link></li>
            <li><Link to='/shopping_cart' activeclassname='active' className='nav-link'><ShoppingCart size={32}/></Link></li>
        
           
        
          
               </>
        )}
       
        </ul>

        <div className='sm-section'>
           <a className='sm-icon' href="/" >{<img className='sm-logo-img' src={instalogo} alt='logo'></img>}</a> 
           <a className='sm-icon' href="/" >{<img className='sm-logo-img' src={instalogo} alt='logo'></img>}</a>
           <a className='sm-icon' href="/" >{<img className='sm-logo-img' src={instalogo} alt='logo'></img>}</a> 
           {/* <h3>Social Media Section</h3>  */}
        </div>

    
    
    </div>
    </>
  )
}
