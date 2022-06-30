import { Fragment, useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { ReactComponent as CrwnLogo } from '../../assets/cdnlogo.com_travis-ci-monochrome.svg'
import { userDetailContext } from '../../contexts/UserContext.js'
import { signOutUser } from '../../utils/firebase/firebase.js'
import './navbar.styles.scss'


const NavBar = () => {
  const { currentUser } = useContext(userDetailContext);

  const handleSignOut = async () => {
    await signOutUser();
    
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
          {currentUser ? (<span className='nav-link' onClick={handleSignOut} >SIGN OUT</span>) : (<Link className='nav-link' to='/auth'>
            SIGN IN
          </Link>)
          }
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default NavBar