import { Route, Routes } from 'react-router-dom'
import CategoriesPreviewPage from '../categories-preview-page/CategoriesPreviewPage'
import Category from '../category/Category'
import './shop.styles.scss'

const Shop = () => {
    return (
        <Routes>
            < Route index element={<CategoriesPreviewPage />} />
            < Route path=":category" element={<Category />} />
        </Routes>
    )
}

export default Shop

