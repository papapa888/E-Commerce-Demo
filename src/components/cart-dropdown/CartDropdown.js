import Button from '../button/button-conponent.js'
import './cart-drop-down.styles.scss'

const CartDropdown = () => {
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items"></div>
            <Button children="GO TO CHECKOUT"/>
        </div>
    )
}

export default CartDropdown