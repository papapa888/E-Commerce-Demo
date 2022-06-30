import { createContext, useState } from 'react'
import PRODUCTS from '../shop-data.json'

export const ProductsContext = createContext({
    products: null,
    setProducts: () => null
});

export const ProductContext = ({ children }) => {
    const [products, setProducts] = useState(PRODUCTS)

    return (
        <ProductsContext.Provider value={{ products, setProducts }} >
            {children}
        </ProductsContext.Provider>
    )
}
