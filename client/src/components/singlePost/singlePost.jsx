import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import './singlePost.css'

const SinglePost = () => {

    const location = useLocation()
    const path = location.pathname.split('/')[2];
    const [post, setPost] = useState({})
    const PF = "http://localhost:5000/images/";
    const {user} = useContext(Context);

    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState("");
    const [updateMode, setUpdateMode] = useState(false);


    useEffect(()=>{
        const getPost = async () =>{
            const res = await axios.get("/posts/" + path);
            setPost(res.data);
            setTitle(res.data.title)
            setDesc(res.data.desc)
        }
        getPost();
    }, [path]);

    const handleDelete = async () =>{
        try{
            await axios.delete(`/posts/${post._id}`, {data: {username: user.username}});
            // window.location.replace("/" );
            setUpdateMode(false)
        } catch(err){}
    }
    const handleUpdate = async () =>{
        try{
            await axios.put(`/posts/${post._id}`, {
                username: user.username, 
                title, 
                desc,
            });
            window.location.reload();
        } catch(err){}
    }

    
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            {post.photo && (
                <img src={PF + post.photo} alt={post.title} className="singlepostImage" />
            )}
            {
                updateMode ? <input type="text" value={title} className='singlepostTitleInput' autoFocus onChange={(e)=>setTitle(e.target.value)} />:(
            <h1 className="singlepostTitle">
                {post.title}
                {post.username === user.username && (
                <div className="singlepostEdit">
                    <i className="singlepostIcon fa-regular fa-pen-to-square" onClick={()=>setUpdateMode(true)}></i>
                    <i className="singlepostIcon fa-sharp fa-solid fa-trash" onClick={handleDelete}></i>
                </div>
                )}
            </h1>
            )}

            <div className="singlepostInfo">
                <span className="author">Author:
                    <Link to={`/?user=${post.username}`} className='link'>
                        <b>{post.username}</b>
                    </Link> 
                </span>
                <span className="singlepostDate">{new Date(post.createdAt).toDateString()}</span>
            </div>
            {
                updateMode ? <textarea name="" id="" cols="30" rows="10" className='singlepostDescInput' value={desc} onChange={(e)=>setDesc(e.target.value)}></textarea> : (
                    <p className='singlepostDesc'>
                    {post.desc}
                </p>
                )}
                {
                    updateMode && 
                    <button className="singlepostButton" onClick={handleUpdate}>Update Now</button>
                }
                
           

        </div>
    </div>
  )
}

export default SinglePost