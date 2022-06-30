import { createContext, useState, useEffect } from 'react'
import { onAuthStateChangedListener, signOutUser, createUserDocumentFromAuth } from '../utils/firebase/firebase'

export const userDetailContext = createContext(
    { currentUser: null, setCurrentUser: () => null }
)


const UserContext = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);


    useEffect(() => {
        const unsub = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user)
        });

        return unsub;
    }, []);

    return (
        <userDetailContext.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </userDetailContext.Provider>
    )
}

export default UserContext