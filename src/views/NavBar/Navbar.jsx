import React from 'react'
import { Link } from 'react-router-dom'
import logoimg from '../../img/react_logo.png'
import emailicon from '../../img/email_icon.png'
import githubicon from '../../img/github_icon.png'
import linkedinicon from '../../img/linkedin_icon.png'
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
            
            <li><Link to='/' activeclassname='active' className='nav-link'> MAIN</Link></li>
            <li><Link to='/shopping_cart' activeclassname='active' className='nav-link'><ShoppingCart size={32}/></Link></li>
        
           
        
          
               </>
        )}
       
        </ul>

        <div className='sm-section'>
           <a className='sm-icon' target='_blank' href="mailto:andrey.detochkin@gmail.com" >{<img className='sm-logo-img'  src={emailicon} alt='logo' target="_blank" ></img>}</a> 
           <a className='sm-icon' target='_blank' href="https://github.com/AndrejsGrocs" >{<img className='sm-logo-img' src={githubicon} alt='logo' target="_blank" ></img>}</a>
           <a className='sm-icon' target='_blank' href="https://www.linkedin.com/in/andrejs-grocs-andrey-detochkin-ab2106141" >{<img className='sm-logo-img' src={linkedinicon} alt='logo'></img>}</a> 
           {/* <h3>Social Media Section</h3>  */}
        </div>

    
    
    </div>
    </>
  )
}
