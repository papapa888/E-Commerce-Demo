import { useContext } from 'react'
import { DropDownContext } from '../../contexts/ShowCartDropDown.js'
import Button from '../button/button-conponent.js'
import CartItem from '../cart-item/CartItem.js'
import './cart-drop-down.styles.scss'

const CartDropdown = () => {
    const { cartList } = useContext(DropDownContext)
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartList.map((item) =>
                    <CartItem key={item.id} {...item}/>
                )}
            </div>
            <Button children="GO TO CHECKOUT" />
        </div>
    )
}

export default CartDropdown