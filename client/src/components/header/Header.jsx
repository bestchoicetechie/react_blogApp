import './Header.css';

const Header = () => {
  return (
    <div className='header'>
        <div className="headerTitle">
            <span className='headerTitlesm'>Wordpress & Programming</span>
            <span className='headerTitlelg'>Blog</span>
        </div>
        <img src="https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="headerImage" />
    </div>
  )
}

export default Header