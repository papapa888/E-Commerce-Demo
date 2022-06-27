import { createContext, useState } from 'react'

export const userDetailContext = createContext(
    { currentUser: null, setCurrentUser: () => null }
)


const UserContext = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)
    return (
        <userDetailContext.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </userDetailContext.Provider>
    )
}

export default UserContext