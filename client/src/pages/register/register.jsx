import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = async (e)=>{
    e.preventDefault();
    setError(false);
    try{
      const res = await axios.post('/auth/register', {
        username,
        email,
        password,
      });
      res.data && window.location.replace('/login');

    } catch(err) {
      setError(true);
    }
  };

  const usernameHandler = (e)=>{
    e.preventDefault();
    setUsername(e.target.value);
  };
  
  const emailHandler = (e)=>{
    e.preventDefault();
    setEmail(e.target.value);
  };

  const passwordHandle = (e)=>{
    e.preventDefault();
    setPassword(e.target.value);
  };

  return (
    <div className='login'>
       <div className="loginInner">
       <span className="loginTitle">Register</span>

        <form className="loginForm" onSubmit={handleSubmit}>

            <label htmlFor="username">Username</label>
            <input type="text" className='loginInput' id="username" placeholder='Enter your username...' onChange={usernameHandler} />

            <label htmlFor="email">Email</label>
            <input type="email" className='loginInput' id="email" placeholder='Enter your email...' onChange={emailHandler} />

            <label htmlFor="password">Password</label>
            <input type="password" className='loginInput' id="password" placeholder='Enter your password...' onChange={passwordHandle} />

            <button className="loginbtn" type='submit'>Register</button>
        </form>
        <button className="registerbtn">
            <Link className='link' to='/login'>Login</Link>
        </button>
        {error && <span style={{color: 'red', marginTop: '10px'}}>Something went wrong</span>}
       </div>
    </div>
  )
}

export default Register