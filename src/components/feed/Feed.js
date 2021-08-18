import React,{useState,useEffect, useContext } from 'react'
import './feed.scss';
import  Share from './share/Share'
import Post from './post/Post'
import axios from 'axios'
import { AuthContext} from '../../context/AuthContext';

function Feed(username) {
    const { user } = useContext(AuthContext);
    const [post, setPost]=useState([]);

    useEffect(()=>{
        const fetchPost = async ()=>{
            const res = await axios.get(`http://localhost:8800/api/posts/timeline/`+user._id)
            console.log(res)
            setPost(res.data);
        };
        fetchPost();
    },[username, user._id])


    return (
        <div className="feed">
            <div className="feedCantainer">
                <Share />
                {
                    post.map(p =>( <Post key={p._id} post={p} />))
                }
              
               

            </div>
            
        </div>
    )
}

export default Feed
