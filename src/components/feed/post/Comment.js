import React,{useState, useEffect, useContext,useRef} from 'react';
import {  PermMedia, Check, ThumbUpAlt, Delete } from '@material-ui/icons'
import axios from 'axios';
import {format} from 'timeago.js';
import { AuthContext} from '../../../context/AuthContext'


function Comment({post}) {
 
    const commentDesc=useRef();
    const [commentFile, setCommentFile] = useState('')
  /*   const [like, setLike] = useState(post.likes.length)
    const [isLiked, setIsLiked] = useState(false) */
    const PF = process.env.REACT_APP_PUBLIC_FOLDER 
    const { user } = useContext(AuthContext);
    const [comments, setComments] = useState([])
    const [commet, setComment] = useState('')

    
    const handleComment = async (e)=>{
        e.preventDefault();
        const newComment = {
            userId: user.user._id,
            desc:commentDesc.current.value,
            postId:post._id
        }
        
        console.log(newComment)
        if(commentFile) {
            console.log(commentFile)
            const data = new FormData();
            const fileName = Date.now()+commentFile.name;
            data.append("name", fileName);
            data.append("file", commentFile);
            newComment.img = fileName;
            console.log(newComment)

            try{
                const res = await axios.post('http://localhost:8800/api/upload', data)
            
            } catch(err){
                console.log(err)
            }

        }

        try{
            const res = await axios.post("http://localhost:8800/api/comments", newComment)
           console.log(res)
         

        } catch(err){
          

        }
    }

    useEffect(()=>{
        const fetchComents = async () =>{
            try{
                const res = await axios.get("http://localhost:8800/api/comments/"+post._id)
                console.log(res)
                setComments(res.data)

            } catch(err){

            }
        }
       

        fetchComents()
    },[post._id])
    
    // delete one comment
    const deleteOneComment =async (comment) =>{
          
        try{
           
           await axios.delete('http://localhost:8800/api/comments/'+comment._id)
          setComments(comments.filter((val)=>{
              console.log(val);
              return val.id !== comment._id
          }))
           

        } catch(err){
            console.log(err)

        }
        
    }

    return (
        <div>
             <div className="commentsContainer">
                                    <div className="commentLeft">
                                      <img src={user.profilePicture? user.profiePicture : PF+"person/avatar.png" } alt=""  />
                                      <span>{user.username}</span>
                                    </div>
                                    <div className="commentInput">
                                      <input type="text" ref={commentDesc} placeholder="Write your comment..." />
                                      <form  onSubmit={handleComment}>
                                        <label htmlFor="file">
                                          <input type="file" id="file" onChange={(e)=>{setCommentFile(e.target.files[0])}}/>
                                          <PermMedia />
                                         </label>
                                         <button type="submit" className="sendBtn"><Check /></button>
                                      
                                      </form>
                                    </div>
                               
                                </div>
                                {
                                    comments.map((comment, key)=>{
                                        return <div className="CommentDescContainer">
                                                  <div className="commentDescImg">
                                                    <img src={user.profilePicture? user.profiePicture : PF+"person/avatar.png" } alt=""  />
                                                  </div>
                                                  <div className="commentBody">
                                                      <div className="commentDesc">
                                                        <span>{user.username}</span>
                                                        <span>{comment.desc}</span>
                                                      </div>
                                                      <div className="commentRight">
                                                          <div className="commentLike">                                                          
                                                            <span>5</span>
                                                            <ThumbUpAlt />
                                                          </div> 
                                                          <div className="commentRightDelete">
                                                          {
                                                              comment.userId===user.user._id && ( 
                                                                <Delete  onClick={()=>deleteOneComment(comment)} />
                                                                 )
                                                          }
                                                          </div>
                                                          
                                                      </div>
                                                   
                                                  </div>
                                                </div>
                                        })
                                }
                               
            
        </div>
    )
}

export default Comment
