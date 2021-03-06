import React, { useContext } from 'react'
import { DropDownContext } from '../../contexts/ShowCartDropDown.js'
import './checkout.styles.scss'

const CheckOutCards = ({ product }) => {

    const { addToList, removeToList, removeEntireItem } = useContext(DropDownContext)
    const { imageUrl, name, price, quantity } = product

    const additem = () => {
        addToList(product)
    }

    const removeItem = () => {
        removeToList(product)
    }

    const removeByClickX = () => [
        removeEntireItem(product)
    ]

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`} />
            </div>

            <span className='name'>{name}</span>


            <span className='quantity'>
                <div className="arrow" onClick={removeItem}>
                    &#10094;
                </div>
                <span className='value'>
                    {quantity}
                </span>
                <div className="arrow" onClick={additem}>
                    &#10095;
                </div>
            </span>


            <span className='price'>${price}</span>

            <div className='remove-button' onClick={removeByClickX}>
                &#10005;
            </div>


        </div>
    )
}

export default CheckOutCards