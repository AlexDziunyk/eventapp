import { NavLink, Link, useNavigate } from "react-router-dom";
import './style.scss';
import { useState } from "react";
import axios from "../../axios/axios";

const LoginPage = () => {

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLoginUser = async () => {
    try {
      const response = await axios.post("/users/login", { login, password });

      if (response.status === 200) {
        navigate('/');
        localStorage.setItem("token", response.data.token)
      } else {
        setError("Such user doesn't exist");
      }

    } catch (error) {
      setError("Such user doesn't exist");
    }
  }

  return (
    <div className='login'>
      <div className='login__container'>
        <h1>Log In</h1>
        <div>Log In to be more powerful</div>
        <div className='loginInput'>
          <b>Login or Email</b>
          <input value={login} onChange={(e) => setLogin(e.target.value)} type='email' placeholder='Enter your login or email'></input>
        </div>
        <div className='loginInput'>
          <b>Password</b>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Enter your password'></input>
        </div>
        <p className='error__text'>{error}</p>
        <button onClick={handleLoginUser} className='login__button'>Login</button>
        <p className='login__text'>Don’t have an account? <Link to="/signup" className='login__text_button'>Sign Up</Link></p>
      </div>
    </div>
  )
}

export default LoginPage
