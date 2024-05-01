import { NavLink, Link } from "react-router-dom";
import './style.scss';

const LoginPage = () => {
  return (
    <div className='login'>
      <div className='login__container'>
        <h1>Log In</h1>
        <div>Log In to be more powerful</div>
        <div className='loginInput'>
          <b>Login or Email</b>
          <input type='email' placeholder='Enter your login or email'></input>
        </div>
        <div className='loginInput'>
          <b>Password</b>
          <input type='password' placeholder='Enter your password'></input>
        </div>
        <button className='login__button'>Login</button>
        <p className='login__text'>Don’t have an account? <Link to="/signup" className='login__text_button'>Sign Up</Link></p>
      </div>
    </div>
  )
}

export default LoginPage
