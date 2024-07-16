import { Link } from 'react-router-dom'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useLogout } from '../../hooks/useLogout'
import CustomButton from '../CustomButton/CustomButton'
import './NavBar.scss'

export default function Navbar() {
    const { logout } = useLogout()
    const { user } = useAuthContext()

    return (
        <nav className={user ? 'navbar' : 'hideNav'}>
            <ul className='navbar__container'>
                {!user && (
                    <>
                        <li className='navbar__title'>Photos</li>
                        <li><Link to="/">Login</Link></li>
                        <li><Link to="/signup">Signup</Link></li>
                    </>
                )}
                {user && (
                    <>
                        <li>hello, {user.displayName}</li>
                        <li><Link to="/home">Home</Link></li>
                        <li>
                            <CustomButton title='Logout' onClick={logout}/>
                        </li>
                    </>
                )}

            </ul>
        </nav>
    )
}