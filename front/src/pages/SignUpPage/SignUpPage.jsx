import { Link, useNavigate } from 'react-router-dom';
import './style.scss';
import { useState } from 'react';
import axios from '../../axios/axios';

const SignUpPage = () => {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleCreateUser = async () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }
    setError('');

    try {
      const response = await axios.post('/users/register', {
        login,
        email,
        password,
      });
      console.log(response);

      if (response.status === 201) {
        navigate('/');
        localStorage.setItem("token", response.data.token)
      } else {
        setError('Such user already exists');
      }
    } catch (error) {
      setError('Such user already exists');
    }
  };

  return (
    <div className='signup'>
      <div className='signup__container'>
        <h1>Sign Up</h1>
        <div>Sign Up to be more powerful</div>
        <div className='signupInput'>
          <b>Login</b>
          <input
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            placeholder='Enter your login'
          ></input>
        </div>
        <div className='signupInput'>
          <b>Email</b>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter your email'
          ></input>
        </div>
        <div className='signupInput'>
          <b>Password</b>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            placeholder='Enter your password'
          ></input>
        </div>
        <div className='signupInput'>
          <b>Confirm password</b>
          <input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type='password'
            placeholder='Confirm your password'
          ></input>
        </div>
        <p className='error__text'>{error}</p>
        <button
          onClick={handleCreateUser}
          disabled={password === '' || login === '' || email === '' || confirmPassword === ''}
          className='signup__button'
        >
          Sign Up
        </button>
        <p className='signup__text'>
          Already have an account? <Link to='/login' className='signup__text_button'>Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
