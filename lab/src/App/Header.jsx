import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => (
    <header> 
        <nav>
       <ul>
       <li> <Link to="/">Login</Link></li>
        <li><Link to="/Main">Main</Link></li>
        </ul>
    </nav>
    </header>
)

export default Header