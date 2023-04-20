import { Link } from 'react-router-dom'
import './NavBar.css'

export default function Navbar() {
    return(
        <nav className='navbar'>
            <ul>
                <li className='title'>My NavBar</li>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/">Login</Link></li>
                <li><Link to="/signup">Signup</Link></li>
            </ul>
        </nav>
    )
}