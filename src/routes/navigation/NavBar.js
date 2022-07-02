import { useState, Fragment, useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { ReactComponent as CrwnLogo } from '../../assets/cdnlogo.com_travis-ci-monochrome.svg'
import CartDropdown from '../../components/cart-dropdown/CartDropdown'
import CartIcon from '../../components/cart-icon/CartIcon'
import { userDetailContext } from '../../contexts/UserContext.js'
import ShowCartDropDown, { DropDownContext } from '../../contexts/ShowCartDropDown'
import { signOutUser } from '../../utils/firebase/firebase.js'
import './navbar.styles.scss'


const NavBar = () => {
  const { currentUser } = useContext(userDetailContext);
  const { isShow } = useContext(DropDownContext)

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
          {currentUser ?
            (<span className='nav-link' onClick={handleSignOut} >SIGN OUT</span>) :
            (<Link className='nav-link' to='/auth'>
              SIGN IN
            </Link>)
          }
          <CartIcon />
        </div>
        {isShow && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  )
}

export default NavBar