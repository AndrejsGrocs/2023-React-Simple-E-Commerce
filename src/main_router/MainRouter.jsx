import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom'
import Navbar from '../views/NavBar/Navbar'
import Landing from '../views/Landing/Landing'
import ShoppingCart from '../views/ShoppingCart/ShoppingCart'





export default function MainRouter() {

  

    return (

        <Router>
        <nav> </nav>


            
       
        <Navbar/>
        
        <Routes>
              <Route path='/' element = {<Landing/>}/>
              <Route path='/shopping_cart' element = {<ShoppingCart/>}/>
            

             


        

        </Routes>
          
          
        </Router>
    )
}