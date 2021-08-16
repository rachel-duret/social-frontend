import React from 'react';
import './post.scss';
import { MoreVert } from '@material-ui/icons'
function Post() {
    return (
        <div className="post">
            <div className="postContainer">
                <div className="postTop">
                    <div className="postTopLeft">
                      <img src="./assets/photo2.jpg" alt="" className="postImg" />
                      <span className="username">User Name</span>
                      <span className="date">5 ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />

                    </div>
                    
                </div>
                <div className="postCenter">
                    <span>What do you think of this pic?</span>
                    <img src="./assets/teddy2.jpg" alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="./assets/like.png" alt="" />
                        <img src="./assets/heart.png" alt="" />
                        <span>10 peoples liked </span>
                    </div>
                    <div className="postBottomRight">8 comments</div>
                  {/*   <ThumbUp />
                    <Message />
                    <Share /> */}


                </div>
            </div>
            
        </div>
    )
}

export default Post
