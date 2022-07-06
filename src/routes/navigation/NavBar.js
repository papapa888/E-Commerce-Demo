import { useState, Fragment, useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import CartDropdown from '../../components/cart-dropdown/CartDropdown'
import CartIcon from '../../components/cart-icon/CartIcon'
import { userDetailContext } from '../../contexts/UserContext.js'
import ShowCartDropDown, { DropDownContext } from '../../contexts/ShowCartDropDown'
import { signOutUser } from '../../utils/firebase/firebase.js'
import { NavigationContainer, Navlink, Navlinks, LogoContainer } from './navbar.styles'


const NavBar = () => {
  const { currentUser } = useContext(userDetailContext);
  const { isShow } = useContext(DropDownContext)

  const handleSignOut = async () => {
    await signOutUser();
  }


  return (
    <Fragment>
      <NavigationContainer className='navigation'>
        <LogoContainer to='/'>
          <CrwnLogo className='logo' />
        </LogoContainer>
        <Navlinks>
          <Navlink to='/shop'>
            SHOP
          </Navlink>
          {currentUser ?
            (<span className='nav-link' onClick={handleSignOut} >SIGN OUT</span>) :
            (<Navlink to='/auth'>
              SIGN IN
            </Navlink>)
          }
          <CartIcon />
        </Navlinks>
        {isShow && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  )
}

export default NavBar