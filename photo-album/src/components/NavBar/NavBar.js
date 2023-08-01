import { Link } from 'react-router-dom'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useLogout } from '../../hooks/useLogout'
import './NavBar.css'

export default function Navbar() {
    const { logout } = useLogout()
    const { user } = useAuthContext()

    return (
        <nav className='navbar'>
            <ul>
                {!user && (
                    <>
                        <li className='title'>My NavBar</li>
                        <li><Link to="/">Login</Link></li>
                        <li><Link to="/signup">Signup</Link></li>
                    </>
                )}
                {user && (
                    <>
                        <li>hello, {user.displayName}</li>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/pictures/">Home</Link></li>
                        <li>
                            <button className='btn' onClick={logout}>Logout</button>
                        </li>
                    </>
                )}

            </ul>
        </nav>
    )
}