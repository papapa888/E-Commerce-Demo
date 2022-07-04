import React, { useContext } from 'react'
import { DropDownContext } from '../../contexts/ShowCartDropDown.js'
import CheckOutCards from '../../components/checkout-cards/CheckOutCards'
import './checkout.styles.scss'

const Checkout = () => {
    const { cartList, totalCost } = useContext(DropDownContext)
    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>
                        Product
                    </span>
                </div>
                <div className='header-block'>
                    <span>
                        Description
                    </span>
                </div>
                <div className='header-block'>
                    <span>
                        Quantiy
                    </span>
                </div>
                <div className='header-block'>
                    <span>
                        Price
                    </span>
                </div>
                <div className='header-block'>
                    <span>
                        Remove
                    </span>
                </div>
            </div>
            {cartList.map((item) => {
                return <CheckOutCards key={item.id} product={item} />
            })}

            <span className='total'>Total  : ${totalCost}</span>

        </div>
    )
}

export default Checkout