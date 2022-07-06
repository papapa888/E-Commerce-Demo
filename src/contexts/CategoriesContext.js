import { createContext, useEffect, useState } from 'react'
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.js';

export const CategoriesContext = createContext({
    categoriesMap: [],
    setProducts: () => null
});

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({})
    //batch add data to firestore
    // useEffect(() => {
    //     addToCollectionAndDocuments('categories', SHOP_DATA)
    // }, [])

    useEffect(() => {
        const getCategoryMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            setCategoriesMap(categoryMap);
        };
        getCategoryMap();
    }, [])

    return (
        <CategoriesContext.Provider value={{ categoriesMap }} >
            {children}
        </CategoriesContext.Provider>
    )
}
