import { useState, createContext, useEffect } from 'react'

export const DropDownContext = createContext({
    isShow: false,
    setIsShow: () => { },
    cartList: [],
    addToList: () => { },
    totalQuantity: 0,
    removeToList: () => { },
    removeEntireItem: () => { },
    totalCost: 0
})

const reduceItem = (list, itemToReduce) => {
    const result = list.find((item) => item.id === itemToReduce.id)

    if (result.quantity - 1 !== 0) {
        return list.map((item) => item.id === itemToReduce.id
            ? { ...item, quantity: item.quantity - 1 }
            : item)
    }
    return list.filter((item) => item.id !== itemToReduce.id)

}

const addItem = (list, itemToAdd) => {
    const itemInCart = list.find((item) => item.id === itemToAdd.id);

    if (itemInCart) {
        return list.map((item) =>
            item.id === itemToAdd.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
        )
    }
    return [...list, { ...itemToAdd, quantity: 1 }]
}

const removeByX = (list, itemToRemove) => {
    return list.filter((item) => item.id !== itemToRemove.id)
}



const ShowCartDropDown = ({ children }) => {
    const [isShow, setIsShow] = useState(false);
    const [cartList, setCartList] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [totalCost, setTotalCost] = useState(0)

    useEffect(() => {
        calculateTotalQuantity()

    }
        , [cartList]);

    useEffect(() => {

        calculateTotal()
    }
        , [cartList]);

    const calculateTotal = () => {
        const total = cartList.reduce((sum, currentItem) => {
            return sum + (currentItem.price * currentItem.quantity)
        }, 0)
        setTotalCost(total);
    };

    const addToList = (productToAdd) => {

        setCartList(addItem(cartList, productToAdd))
    };

    const removeEntireItem = (productToRemove) => {
        setCartList(removeByX(cartList, productToRemove))

    };


    const removeToList = (productToRemove) => {
        setCartList(reduceItem(cartList, productToRemove))
    };



    const calculateTotalQuantity = () => {
        const total = cartList.reduce((sum, item) => {
            return sum += item.quantity;
        }, 0)
        setTotalQuantity(total);
    }

    const value = { isShow, setIsShow, cartList, addToList, totalQuantity, removeToList, removeEntireItem, totalCost }
    return (
        <DropDownContext.Provider value={value}>
            {children}
        </DropDownContext.Provider>
    )
}

export default ShowCartDropDown