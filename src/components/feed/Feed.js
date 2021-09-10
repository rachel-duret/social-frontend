import React,{useState,useEffect, useContext } from 'react'
import './feed.scss';
import  Share from './share/Share'
import Post from './post/Post'
import axios from 'axios'
import { AuthContext} from '../../context/AuthContext';

function Feed(userId) {
    const { user } = useContext(AuthContext);
    const [post, setPost]=useState([]);

    useEffect(()=>{
        const fetchPost = async ()=>{
            const res = await axios.get(`http://localhost:8800/api/posts/timeline/`+user._id)    
        
            //用sort方法来排列显示最近发表的文章在头。
            setPost(res.data.sort((p1,p2)=>{
                return new Date(p2.createdAt) - new Date(p1.createdAt)
            }));
        };
        fetchPost();
    },[ user._id])


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
