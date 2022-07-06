import React, { useContext } from 'react'
import { CategoriesContext } from '../../contexts/CategoriesContext'
import CategoryPreview from '../../components/category-preview/CategoryPreview.js'


const CategoriesPreviewPage = () => {
    const { categoriesMap } = useContext(CategoriesContext)
    return (
        <div className='shop-container'>
            {
                Object.keys(categoriesMap).map(title =>
                    (<CategoryPreview key={title} title={title} products={categoriesMap[title]} />)
                )
            }

        </div>
    )
}

export default CategoriesPreviewPage