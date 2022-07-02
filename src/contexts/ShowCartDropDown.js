import { useState, createContext } from 'react'

export const DropDownContext = createContext({
    isShow: null,
    setIsShow: () => null
})

const ShowCartDropDown = ({ children }) => {
    const [isShow, setIsShow] = useState(false);
    return (
        <DropDownContext.Provider value={{ isShow, setIsShow }}>
            {children}
        </DropDownContext.Provider>
    )
}

export default ShowCartDropDown