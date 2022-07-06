import { useState, useEffect, useContext, Fragment } from 'react'
import { CategoriesContext } from '../../contexts/CategoriesContext'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/product-card/ProductCard'
import './category.styles.scss'

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext)
    const [products, setProduct] = useState(categoriesMap[category])

    useEffect(() => { setProduct(categoriesMap[category]) }
        , [categoriesMap, category]);

    return (
        <Fragment>
            <h2 className='category-title'>{category.toUpperCase()}</h2>
            <div className='category-container'>
                {products && products.map((product) => <ProductCard key={product.id} product={product} />)}
            </div>
        </Fragment>
    )
}

export default Category