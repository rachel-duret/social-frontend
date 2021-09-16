import React,{useState, useEffect, useContext } from 'react'
import Header from '../../components/header/Header'
import LeftBar from '../../components/leftBar/LeftBar'
import ProfileRightBar from './ProfileRightBar'
import axios from 'axios';
import './profile.scss'
import {useParams} from 'react-router'; 
import { AuthContext } from '../../context/AuthContext'
import {format} from 'timeago.js';
import {  Delete } from '@material-ui/icons'


function Profile() {
   /*  const { user } = useContex(AuthContext); */
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [user, setUser]= useState({});
    const [posts, setPosts]= useState([])
    const id = useParams().userId;
    const {user: currentUser } = useContext(AuthContext);
   


    useEffect(()=>{
        const fetchUser = async ()=>{
            try{
                const res = await axios.get(`http://localhost:8800/api/posts/profile/${id}`);
                setUser(res.data[0]);
                setPosts(res.data[1].sort((p1,p2)=>{
                    return new Date(p2.createdAt) - new Date(p1.createdAt)
                }));

            } catch(err){
                console.log(err)
            }
           
            
        }
        fetchUser();
    },[id]);
   
  
    
       // delete one post

        const deletePost =async (post) =>{
          
            try{
               
               await axios.delete('http://localhost:8800/api/posts/'+post._id)
               window.location.reload();
               
    
            } catch(err){
                console.log(err)
    
            }
            
        }
      
   

 
    
    
  
    
  
    return (
        <div className="profile">
            <Header />
            <div className="profileBody">
                <div className="profileLeft">
                    <LeftBar />
                </div>
                <div className="profileRight">
                    <div className="profileCove">
                        <img src={user.coverPicture ? user.coverPicture : PF+'/cover.png'} className="profileCoveImg" alt="" />
                        <img src={ user.profilePicture ? user.profilePicture : PF+"person/avatar.png"} alt="" className="profileImg" />

                    </div>
                    <div className="profileInfo">
                        <h4>{user.username}</h4>
                        <span>{user.desc}</span>
                    </div>
                    <div className="profileRightBottom">
                        <div className="profilePosts">
                        {
                           posts.map((post, key)=>{
                               return <div className="post" key={post._id}>
                               <div className="postContainer">
                                   <div className="postTop">
                                       <div className="postTopLeft">
                                          
                                             <img src={user.profilePicture? user.profiePicture : PF+"person/avatar.png" } alt="" className="postImg" />
                                         
                                         
                                         <span className="username">{user.username}</span>
                                         <span className="date">{format(post.creatdAt)}</span>
                                       </div> 
                                       <div className="deleteBtn" >
                                           {
                                               post.userId===currentUser.user._id && (
                                                <Delete  onClick={()=>deletePost(post)} />

                                               )
                                           }
                                         
                                         
                                       </div>           
                                       
                                   </div>
                                   <div className="postCenter">
                                       <span>{post.desc}</span>
                                       <img src={post.img} alt="" />
                                   </div>
                                   <div className="postBottom">
                                       <div className="postBottomLeft">
                                           <img src={`${PF}like.png`} alt="" />
                                           <span>{post.likes} </span>
                                       </div>
                                       <div className="postBottomRight">
                                           {post.comment}
                                           <span>comments</span>
                                          
                                       </div>
                   
                   
                                   </div>
                               </div>
                               
                           </div>
                           })
                       }
                        </div>
                       
                        <ProfileRightBar user={user}  />
                       
                      
                    </div>
                   
                </div>
            </div>
            
        </div>
    )
}

export default Profile
