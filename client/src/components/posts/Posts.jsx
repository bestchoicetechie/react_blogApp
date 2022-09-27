import './Posts.css';
import Post from '../post/post';

const Posts = ({posts}) => {
  return (
    <div className='posts'>
      {posts.map((item)=>(
        <Post post={item}  />
      ))}
      
    </div>
  )
}

export default Posts