import { Link } from 'react-router-dom'
import './index.css'

function Menu() {
    return (
       <nav>
            <ul className="main-menu">
                <li>
                <Link to="/" key="home">Home</Link>
                </li>
                <li>
                <Link to="/about" key="about">About</Link>
                </li>
                <li>
                <Link to="/contact" key="contact">Contact</Link>
                </li>
            </ul>
        </nav>  
    )
  }
  
  export default Menu
  