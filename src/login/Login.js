import React, { useState } from 'react'
import { signInWithGooglePopup, createUserDocumentFromAuth, signInWithAuthEmailAndPassword } from '../utils/firebase/firebase.js'
import Button from '../components/button/button-conponent.js'
import FormInput from '../components/form-input/FormInput.js'
import { async } from '@firebase/util'

const defaultLogins = {
    email: '',
    password: ''
}

const Login = () => {
    const [logins, setLogins] = useState(defaultLogins)
    const { email, password } = logins


    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
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
            const response = await signInWithAuthEmailAndPassword(email, password)
            console.log(response);
        } catch (error) {

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
                    <Button children={"Log in"}></Button>
                    <Button onClick={logGoogleUser} children="Sign in with Google" buttonType='google' />
                </div>
            </form>
        </div>
    )
}

export default Login