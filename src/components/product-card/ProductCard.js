import React, { useContext } from 'react'
import { DropDownContext } from '../../contexts/ShowCartDropDown.js'
import Button, { BUTTON_TYPE_CLASSES } from '../button/button-conponent'
import './product-card.styles.scss'

const ProductCard = ({ product }) => {
    const { addToList } = useContext(DropDownContext);
    const { name, imageUrl, price } = product;

    const addTocart = () => {
        addToList(product)
    }

    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted}
                onClick={addTocart}
                children='Add to cart' />
        </div>
    )
}

export default ProductCard