import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

const Sidebar = () => {

  const [cats, setCats] = useState([]);

  useEffect(()=>{
    const getCats = async () =>{
      const res = await axios.get('/categories');
      setCats(res.data)
    }
    getCats();
  },[]);
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
            <span className="sidebarTitle">About Me</span>
            <img src="https://scontent.flos2-1.fna.fbcdn.net/v/t1.18169-9/12108284_1685421855038025_3225944979582301931_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFlEEFN_q4efCXVUNAZLErWIvqql7rj5Xwi-qqXuuPlfGjbDrJS0dR1bjXOSu34EBK18eZBE-vM29_crhACL3k4&_nc_ohc=55gOzEACDCgAX-9DQ_B&_nc_ht=scontent.flos2-1.fna&oh=00_AT-2oq8jMNpRpdwEcpYQM3bOauzE8To3tP6jQTOMa9eQuw&oe=634306E4" width={200} alt="" />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, laboriosam veniam? Animi magnam dignissimos repudiandae veritatis vero placeat iure distinctio.
            </p>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">Categories Me</span>
        <ul className="sidebarList">
           {cats.map((catItem)=>(
              <Link to={`/?cat=${catItem.name}`} className='link'>
                <li className="sidebarListItem">{catItem.name}</li>
              
            </Link>
              
           ))}
            
        </ul>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">Follow Us</span>
        <div className="sidebarSocial">
        <i  className="sidebarIcon fa-brands fa-facebook"></i>
        <i className='sidebarIcon fa-brands fa-square-twitter'></i>
        <i className='sidebarIcon fa-brands fa-pinterest'></i>
        <i className='sidebarIcon fa-brands fa-square-instagram'></i>
        <i className='sidebarIcon fa-brands fa-square-youtube'></i>
        </div>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">About Me</span>
            <img src="https://scontent.flos2-1.fna.fbcdn.net/v/t1.18169-9/12108284_1685421855038025_3225944979582301931_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFlEEFN_q4efCXVUNAZLErWIvqql7rj5Xwi-qqXuuPlfGjbDrJS0dR1bjXOSu34EBK18eZBE-vM29_crhACL3k4&_nc_ohc=55gOzEACDCgAX-9DQ_B&_nc_ht=scontent.flos2-1.fna&oh=00_AT-2oq8jMNpRpdwEcpYQM3bOauzE8To3tP6jQTOMa9eQuw&oe=634306E4" width={200} alt="" />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, laboriosam veniam? Animi magnam dignissimos repudiandae veritatis vero placeat iure distinctio.
            </p>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">Categories Me</span>
        <ul className="sidebarList">
           {cats.map((catItem)=>(
              <Link to={`/?cat=${catItem.name}`} className='link'>
                <li className="sidebarListItem">{catItem.name}</li>
              
            </Link>
              
           ))}
            
        </ul>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">Follow Us</span>
        <div className="sidebarSocial">
        <i  className="sidebarIcon fa-brands fa-facebook"></i>
        <i className='sidebarIcon fa-brands fa-square-twitter'></i>
        <i className='sidebarIcon fa-brands fa-pinterest'></i>
        <i className='sidebarIcon fa-brands fa-square-instagram'></i>
        <i className='sidebarIcon fa-brands fa-square-youtube'></i>
        </div>
        </div>
    </div>
  )
}

export default Sidebar