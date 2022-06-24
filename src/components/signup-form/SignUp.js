import { useState } from "react"
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.js'
import Button from "../button/button-conponent.js";
import FormInput from '../form-input/FormInput.js'
import './signUpform.styles.scss'

const defaultFormField = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}
const SignUp = () => {
    const [formFields, setFormFields] = useState(defaultFormField);
    const { displayName, email, password, confirmPassword } = formFields


    const handleChange = (event) => {
        const { name, value } = event.target
        setFormFields({ ...formFields, [name]: value })

    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            return

        } try {
            const response = await createAuthUserWithEmailAndPassword(email, password)
            const { user } = response

            await createUserDocumentFromAuth(user, { displayName })

        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use');
            } else {
                console.log('user creation encountered an error'+ error.code)
            }
        }finally{
            setFormFields(defaultFormField)
        }

    }

    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label={'Display Name'} 
                type="text" 
                onChange={handleChange} 
                required 
                name="displayName" 
                value={displayName} 
                />

                <FormInput label="Email" 
                type="email" 
                required
                name="email" 
                onChange={handleChange} 
                value={email} />

                
                <FormInput label="Password"
                type="password" 
                required
                name="password" 
                value={password} 
                onChange={handleChange} />

                <FormInput label="Confirm Password" 
                type="password" 
                required name="confirmPassword" 
                value={confirmPassword} 
                onChange={handleChange} />

                <Button children="Sign up" />
            </form>
        </div>
    )
}
export default SignUp