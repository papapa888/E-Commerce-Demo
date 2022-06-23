import React from 'react'
import {signInWithGooglePopup , createUserDocumentFromAuth} from '../../utils/firebase/firebase.js'

const SignIn = () => {
    const logGoogleUser = async ()=>{
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }
  return (
    <div>
        <h1>Sign in Page</h1>
        <button onClick={logGoogleUser}>Sign in with google</button>
    </div>
  )
}

export default SignIn