import React, { useContext } from 'react'
import { ProductsContext } from '../../contexts/ProductContext'
import ProductCard from '../../components/product-card/ProductCard'
import './shop.styles.scss'

const Shop = () => {
    const { products } = useContext(ProductsContext)
    return (
        <div className='products-container'>
            {products.map((product) => {
                return (
                    <ProductCard key={product.id} {...product} />
                )
            })}
        </div>
    )
}

export default Shop