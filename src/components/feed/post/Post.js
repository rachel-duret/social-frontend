import React,{useState, useEffect, useContext} from 'react';
import './post.scss';
import { MoreVert } from '@material-ui/icons'
import axios from 'axios';
import {format} from 'timeago.js';
import {Link} from 'react-router-dom';
import { AuthContext} from '../../../context/AuthContext'
function Post({post}) {
    const [like, setLike] = useState(post.like)
    const [isLiked, setIsLiked] = useState(false)
    const [user, setUser] = useState({});

    const likeHandle = () =>{
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
    }

    const PF = process.env.REACT_APP_PUBLIC_FOLDER 

    useEffect(()=>{
        const fetchUser = async ()=>{
            const res = await axios.get(`http://localhost:8800/api/users?userId=${post.userId}`)
            console.log(res);
            setUser(res.data)
        }
        fetchUser();
    },[post.userId]);
  
    return (
       
        <div className="post">
            <div className="postContainer">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to={`profile/${user.username}`}>
                          <img src={user.profilePicture? user.profiePicture : PF+"person/avatar.png" } alt="" className="postImg" />
                        </Link>
                      
                      <span className="username">{user.username}</span>
                      <span className="date">{format(post.creatdAt)}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />

                    </div>
                    
                </div>
                <div className="postCenter">
                    <span>{post.desc}</span>
                    <img src={post.img} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src={`${PF}like.png`} alt="" onClick={likeHandle} />
                        <img src={`${PF}heart.png`} alt="" />
                        <span>{like} </span>
                    </div>
                    <div className="postBottomRight">
                        {post.comment}
                        <span>comments</span>
                    </div>
                  {/*   <ThumbUp />
                    <Message />
                    <Share /> */}


                </div>
            </div>
            
        </div>
    )
}

export default Post
