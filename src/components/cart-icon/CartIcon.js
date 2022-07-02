import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { useContext } from 'react'
import { DropDownContext } from '../../contexts/ShowCartDropDown.js'
import './cart-icon.styles.scss'


const CartIcon = () => {
    const { isShow, setIsShow } = useContext(DropDownContext)

    return (
        <div className='cart-icon-container' onClick={() => { setIsShow(!isShow) }}>
            <ShoppingIcon className='shopping-cart' />
            <span className='item-count'>
                0
            </span>
        </div>
    )
}

export default CartIcon