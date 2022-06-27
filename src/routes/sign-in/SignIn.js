import SignUp from '../../components/signup-form/SignUp.js'
import Login from '../../login/Login.js'
import './log-in.styles.scss'

const SignIn = () => {

  return (
    <div className="sign-in-container">
      <h1>Sign in page</h1>
      <div className="form-container">
        <Login />
        <SignUp />
      </div>
    </div>
  )
}

export default SignIn