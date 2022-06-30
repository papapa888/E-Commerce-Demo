import React from 'react'
import Button from '../button/button-conponent'
import './product-card.styles.scss'

const ProductCard = ({ name, imageUrl, price }) => {
    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType={'inverted'} children='Add to cart'/>
        </div>
    )
}

export default ProductCard