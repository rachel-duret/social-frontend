import React,{useState, useEffect, useContext} from 'react';
import './post.scss';
import { MoreVert} from '@material-ui/icons'
import axios from 'axios';
import {format} from 'timeago.js';
import {Link} from 'react-router-dom';
import { AuthContext} from '../../../context/AuthContext'
import Comment from './Comment'
function Post({post}) {
    const [like, setLike] = useState(post.likes.length)
    const [isLiked, setIsLiked] = useState(false)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER 
    const { user:currentUser } = useContext(AuthContext);
    const [commentState, setCommentState] = useState(false)
    const [user, setUser]= useState([]);
 

    const likeHandle = () =>{
        try{
            axios.put("http://localhost:8800/api/posts/"+post._id+"/like", {userId:currentUser.user._id})
            setLike(isLiked ? like-1 : like+1)
            setIsLiked(!isLiked)

        } catch(err){
            console.log(err)

        }
        
    }

    useEffect(()=>{
        const fetchUser = async ()=>{
            try{
                const res=await axios.get("http://localhost:8800/api/users/"+post.userId)
                setUser(res.data);

            } catch(err){

            }
        }
        fetchUser();
    },[post.userId])

    //comments
   
  
    return (
       
        <div className="post">
            <div className="postContainer">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to={`profile/${user._id}`}>
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
                        <span>{like} </span>
                    </div>
                    <div className="postBottomRight">
                        <div className="comment" onClick={()=>{setCommentState(true)}} >
                            Comment
                           
                        </div>
                    </div>


                </div>
                {commentState=== true &&(<Comment post={post} />)}
               
            </div>
            
        </div>
    )
}

export default Post
