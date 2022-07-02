import { useState, createContext, useEffect } from 'react'

export const DropDownContext = createContext({
    isShow: false,
    setIsShow: () => { },
    cartList: [],
    addToList: () => { },
    totalQuantity: 0
})


const ShowCartDropDown = ({ children }) => {
    const [isShow, setIsShow] = useState(false);
    const [cartList, setCartList] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0);

    useEffect(() => { calculateTotalQuantity() }
        , [cartList])

    const addToList = (productToAdd) => {
        const { id } = productToAdd
        const result = cartList.find((item) => item.id === id);
        if (result === undefined) {
            setCartList([...cartList, { ...productToAdd, quantity: 1 }])
        } else {
            const newList = cartList.map((item) => {
                if (item.id !== result.id) {
                    return item;
                }
                return { ...item, quantity: item.quantity + 1 }
            })
            setCartList(newList)
        }
    }

    const calculateTotalQuantity = () => {
        let total = 0;
        cartList.forEach((item) => {
            total += item.quantity;
        })
        setTotalQuantity(total);
    }

    const value = { isShow, setIsShow, cartList, addToList, totalQuantity }
    return (
        <DropDownContext.Provider value={value}>
            {children}
        </DropDownContext.Provider>
    )
}

export default ShowCartDropDown