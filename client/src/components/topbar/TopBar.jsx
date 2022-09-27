import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import './topBarr.css'

const TopBar = () => {
  const PF = "http://localhost:5000/images/";
  const {user, dispatch} = useContext(Context);

  const handleLogout = () =>{
    dispatch({type: "LOGOUT"})

  }
  return (
    <div className='top'>
        <div className='topLeft'>
        <i style={{color: '	#3b5998'}} className="topIcon fa-brands fa-facebook"></i>
        <i style={{color: '	#55acee'}} className='topIcon fa-brands fa-square-twitter'></i>
        <i style={{color: '	#bd081c'}} className='topIcon fa-brands fa-pinterest'></i>
        <i style={{color: '	#ce1126'}} className='topIcon fa-brands fa-square-instagram'></i>
        <i style={{color: '#cd201f'}} className='topIcon fa-brands fa-square-youtube'></i>
        </div>
        <div className='topCenter'>
            <ul className='topList'>
                <li className='topListItem'>
                  <Link to='/' className='link' >Home</Link>
                </li>
                <li className='topListItem'>
                  <Link to='/about' className='link' >About</Link>
                </li>
                <li className='topListItem'>
                    <Link className='link' to='/contact'>Contact</Link>
                </li>
                <li className='topListItem'>
                    <Link className='link' to='/write'>Write</Link>
                </li>
                <li className='topListItem' onClick={handleLogout}>
                    {user && 'Logout'}
                </li>
            </ul>
        </div>
        <div className='topRight'>
           { user ? (
           
              <Link to='/setting'>
              <img className='topImage' src={ PF + user.profileImage} alt={user.username} />
              </Link>
              
                
      
           ) : (
            <ul className='topList'>
              <li className="topListItem">
                  <Link className='link' to='/login'>Login</Link>
              </li>
              <li className="topListItem">
                  <Link className='link' to='/register'>Register</Link>
              </li>

            </ul>
           )}
           <i className="searchIcon fas fa-search" ></i>
            
        </div>
    </div>
  )
}

export default TopBar