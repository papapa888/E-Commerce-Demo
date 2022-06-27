import React, { useState, useContext } from 'react'
import { signInWithGooglePopup, createUserDocumentFromAuth, signInWithAuthEmailAndPassword, signOutUser } from '../utils/firebase/firebase.js'
import { userDetailContext } from '../contexts/UserContext.js'
import Button from '../components/button/button-conponent.js'
import FormInput from '../components/form-input/FormInput.js'


const defaultLogins = {
    email: '',
    password: ''
}

const Login = () => {
    const [logins, setLogins] = useState(defaultLogins)
    const { email, password } = logins

    const { currentUser, setCurrentUser } = useContext(userDetailContext)

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
        setCurrentUser(user)
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setLogins(
            { ...logins, [name]: value }
        )
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { user } = await signInWithAuthEmailAndPassword(email, password)
            setCurrentUser(user);
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('Incorrect password or Email')
                    break;
                case 'auth/user-not-found':
                    alert('User not found')
                    break;
                default: console.log(error)
                    break;
            }
        } finally {
            setLogins(defaultLogins)
        }

    }
    return (
        <div className='sign-up-container'>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="email"
                    required
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                />

                <FormInput label="password"
                    required
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                />
                <div className='buttons-container'>
                    {currentUser == null ? <Button type="submit" children={"Log in"}></Button> :
                        <Button type="submit" onClick={signOutUser} children={"Log out"}></Button>}
                    <Button type="button" onClick={logGoogleUser} children="Google Sign in" buttonType='google' />
                </div>
            </form>
        </div>
    )
}

export default Login