import { useContext } from 'react'
import { DropDownContext } from '../../contexts/ShowCartDropDown.js'
import { useNavigate } from 'react-router-dom'
import {CartDropdownContainer,CartItems} from './cart-drop-down.styles'
import {BUTTON_TYPE_CLASSES} from '../button/button-conponent'
import Button from '../button/button-conponent.js'
import CartItem from '../cart-item/CartItem.js'


const CartDropdown = () => {
    const navigate = useNavigate();

    const toCheckoutHandler = () => {
        navigate('/checkout')
    }

    const { cartList } = useContext(DropDownContext)
    return (
        <CartDropdownContainer>
            <CartItems>
                {cartList.map((item) =>
                    <CartItem key={item.id} {...item} />
                )}
            </CartItems>

            <Button buttonType={BUTTON_TYPE_CLASSES.base} onClick={toCheckoutHandler} children="GO TO CHECKOUT" />

        </CartDropdownContainer>
    )
}

export default CartDropdown