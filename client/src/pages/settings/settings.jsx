import './settings.css';
import Sidebar from '../../components/sidebar/Sidebar';
// import User from '../../../../api/models/User';
import { Context } from '../../context/Context';
import { useContext, useState } from 'react';
import axios from 'axios';

const Settings = () => {
  const [username, setUsername] = useState('');
  const [email, setemail] = useState('');
  const [file, setFile] = useState(null);
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);
  const {user, dispatch} = useContext(Context);

  const PF = "http://localhost:5000/images/";

  const handleSubmit = async (e) =>{
    e.preventDefault();
    dispatch({type: "UPDATE_START"})
    const updatedUser = {
        userId: user._id,
        username,
        email,
        password,
    };
    if(file){
        const data = new FormData();
        const filename = Date.now() + file.name;
        data.append("name", filename)
        data.append("file", file);
        updatedUser.profileImage = filename;

        try{
            await axios.post('/upload', data)
           
        } catch(err){}
    }
    try{
      const res = await axios.put("/users/" + user._id, updatedUser);
      setSuccess(true)
      dispatch({type: "UPDATE_SUCCESS", payload:res.data})
       
    } catch(err){
      // dispatch({type: "UPDATE_FAILURE"})
    }

}





  return (
    <div className='settings'>
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Delete Your Account</span>
            </div>
            <form className='settingsform' onSubmit={handleSubmit}>
                <label >Profile Picture</label>
                <div className="settingsProfile">
                <img src={file ? URL.createObjectURL(file) : PF + user.profileImage} alt="" />
                <label htmlFor="fileInput">
                <i className="settingsProfilePicIcon fa-sharp fa-solid fa-user-tie"></i>
                </label>
                <input className='formInput' type="file" id="fileInput" style={{display: 'none'}} onChange={(e)=>setFile(e.target.files[0])} />
                </div>
                <label htmlFor='username'>Username</label>
                <input className='formInput' type="text"  id="username" placeholder={user.username} onChange={(e)=>setUsername(e.target.value)} />
                <label htmlFor="email">Email</label>
                <input className='formInput' type="email"  id="email" placeholder={user.email} onChange={(e)=>setemail(e.target.value)} />
                <label htmlFor="password">Password</label>
                <input className='formInput' type="password"  id="password" onChange={(e)=>setPassword(e.target.value)}  />
                <button className="settingssubmit" type='submit'>Update</button>
                {success && (<p style={{color: 'green', fontSize: '1rem', margin: '10px'}}>Updated Successful</p>)}
            </form>
        </div>
        <Sidebar />
    </div>
  )
}

export default Settings