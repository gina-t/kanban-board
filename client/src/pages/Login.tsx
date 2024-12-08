import { useState, FormEvent, ChangeEvent } from "react";
import AuthService from '../utils/auth'; // Import the singleton instance of AuthService
import login from "../api/authAPI"; // Import login function from authAPI
import { UserLogin } from '../interfaces/UserLogin'; // Import UserLogin interface

const Login = () => {
  const [loginData, setLoginData] = useState<UserLogin>({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      console.log('Attempting to login with:', loginData); // Log the login data
      const data = await login(loginData);
      console.log('API response:', data); // Log the API response
      if (data.token) {
        AuthService.login(data.token); // Use the singleton instance of AuthService to store the token
        console.log('Login successful, token:', data.token);
      } else {
        setError('Failed to retrieve token');
        console.error('Failed to retrieve token:', data); // Log the failure
      }
    } catch (err) {
      console.error('Failed to login:', err);
      setError('Invalid username or password');
    }
  };

  return (
    <div className='container'>
      <form className='form' onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label>Username</label>
        <input 
          type='text'
          name='username'
          value={loginData.username || ''}
          onChange={handleChange}
          className='input-field'
        />
        <label>Password</label>
        <input 
          type='password'
          name='password'
          value={loginData.password || ''}
          onChange={handleChange}
          className='input-field'
        />
        <button type='submit' className='button'>Submit Form</button>
        {error && <p className='login-notice'>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
