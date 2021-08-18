import React,{useState,useEffect} from 'react'
import './feed.scss';
import  Share from './share/Share'
import Post from './post/Post'
import axios from 'axios'

function Feed() {
    const [post, setPost]=useState([]);

    useEffect(()=>{
        const fetchPost = async ()=>{
            const res = await axios.get("http://localhost:8800/api/posts/timeline/61128fe31aa7511870fc20ad");
            console.log(res)
            setPost(res.data);
        };
        fetchPost();
    },[])


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
