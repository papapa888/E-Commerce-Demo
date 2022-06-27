import { useContext, Fragment } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { userDetailContext } from '../../contexts/UserContext.js'
import { ReactComponent as CrwnLogo } from '../../assets/cdnlogo.com_travis-ci-monochrome.svg'
import { signOutUser } from '../../utils/firebase/firebase.js'
import './navbar.styles.scss'


const NavBar = () => {
  const { currentUser, setCurrentUser } = useContext(userDetailContext)
  const handleSignOut = async () => {
    await signOutUser();
    setCurrentUser(null)
  }
  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          {currentUser ? (<span className='nav-link' onClick={handleSignOut} >Sign out</span>) : (<Link className='nav-link' to='/auth'>
            Sign In
          </Link>)
          }
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default NavBar