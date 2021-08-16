import React,{useState} from 'react';
import './post.scss';
import { MoreVert } from '@material-ui/icons'
import {Users} from '../../../datas'
function Post({post}) {
    const [like, setLike] = useState(post.like)
    const [isLiked, setIsLiked] = useState(false)

    const likeHandle = () =>{
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
    }
  
    return (
       
        <div className="post">
            <div className="postContainer">
                <div className="postTop">
                    <div className="postTopLeft">
                      <img src={Users.filter(user=> user.id===post?.userId)[0].profilePicture} alt="" className="postImg" />
                      <span className="username">{Users.filter(user =>user.id === post?.userId)[0].username}</span>
                      <span className="date">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />

                    </div>
                    
                </div>
                <div className="postCenter">
                    <span>{post.desc}</span>
                    <img src={post.photo} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="./assets/like.png" alt="" onClick={likeHandle} />
                        <img src="./assets/heart.png" alt="" />
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
