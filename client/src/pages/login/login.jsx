import axios from 'axios';
import { useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import './login.css';

const Login = () => {

  const userRef = useRef();
  const passwordRef = useRef();
  const {dispatch, isFetching} = useContext(Context)



  const handleSubmit = async (e)=>{
    e.preventDefault()
    dispatch({type: "LOGIN_START" })
    try{
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      })
      dispatch({type: "LOGIN_SUCCESS", payload: res.data})
    } catch(err){
      dispatch({type: "LOGIN_FAILURE" })
    }
  };

  return (
    <div className='login'>
       <div className="loginInner">
       <span className="loginTitle">Login</span>
        <form className="loginForm" onSubmit={handleSubmit}>
            <label htmlFor="email">Username</label>
            <input type="text" className='loginInput' id="email" placeholder='Enter your username...' ref={userRef} />
            <label htmlFor="password">Password</label>
            <input type="password" className='loginInput' id="password" placeholder='Enter your password...' ref={passwordRef} />
            <button className="loginbtn" type='submit' disabled={isFetching}>Login</button>
        </form>
        <button className="registerbtn">
            <Link className='link' to='/register'>Register</Link>
        </button>
       </div>
    </div>
  )
}

export default Login