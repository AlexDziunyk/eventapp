import { Link } from 'react-router-dom'
import './style.scss'

const SignUpPage = () => {
  return (
    <div className='signup'>
      <div className='signup__container'>
        <h1>Sign Up</h1>
        <div>Sign Up to be more powerful</div>
        <div className='signupInput'>
          <b>Login</b>
          <input placeholder='Enter your login'></input>
        </div>
        <div className='signupInput'>
          <b>Password</b>
          <input type='password' placeholder='Enter your password'></input>
        </div>
        <div className='signupInput'>
          <b>Confirm password</b>
          <input type='password' placeholder='Confirm your password'></input>
        </div>
        <button className='signup__button'>Sign Up</button>
        <p className='signup__text'>Already have an account? <Link to="/login" className='signup__text_button'>Sign In</Link></p>
      </div>
    </div>
  )
}

export default SignUpPage