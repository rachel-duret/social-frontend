import React,{ useContext, useRef, useState, useEffect} from 'react'
import './share.scss'
import {PermMedia, Label, Room, EmojiEmotions, Cancel} from '@material-ui/icons'
import { AuthContext } from '../../../context/AuthContext'
import axios from 'axios';
import {storage} from '../../../fireBase/config';
function Share() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER 
    const { user } = useContext(AuthContext);
    const postDesc = useRef();
    const [file, setFile] = useState("")
    const [error, setError] = useState(null);
    const [imgUrl, setImgUrl] = useState('')
    
    // create post data
    const handleCreatePost = async (e) =>{
        e.preventDefault(); 
        const newPost ={
            userId: user.user._id,
            desc:postDesc.current.value
        }
        if (file) {
            //if there is an image file then upload the image to firebase- storage
            const uploadTask = storage.ref('postImages/'+file.name).put(file);
            uploadTask.on(
                'state_changed',
                snapshot=>{},
                error=>{console.log(error)},
                ()=>{
                    storage
                    .ref("postImages")
                    .child(file.name)
                    .getDownloadURL()
                    .then(url => {
                        console.log(url)
                      setImgUrl(url);
                    })
                }
            )
           
            newPost.img = imgUrl
            console.log(newPost);
           
        }     
        try{
            //send post data to server
            await axios.post("http://localhost:8800/api/posts", newPost)
            window.location.reload();

        } catch(err){

        }

    }
    return (
        <div className='share'>
            <div className="shareContainer">
                <div className="shareTop">
                    <img src={ user.user.profilePicture ? PF+user.user.profilePicture : PF+"person/avatar.png"} alt="" className="shareImg" />
                    <label htmlFor="shareInput"></label>
                    <input type="text" className="shareInput" id="shareInput" ref={postDesc} placeholder={"What's in your mind "+ user.user.username+"?"} />
                </div>
                <hr/>
                {
                    file && (
                        <div className="shareImgContainer">
                            <img src={URL.createObjectURL(file)} alt="" />
                            <Cancel className="shareCancelImg" onClick={()=>setFile(null)} />
                        </div>
                    )
                }
                
                <form className="shareBottom" onSubmit={handleCreatePost}>
                  <div className="shareOptions">
                      <label htmlFor="file" className="shareOption">             
                        <PermMedia htmlColor="green" />
                        <span>Pohoto/Video</span>
                        <input type="file" className="file" id="file" onChange={(e)=>{setFile(e.target.files[0])}} />                   
                      </label>
                   
                        
                    
                    <div className="shareOption">
                        <Label htmlColor="blue" />
                        <span>Tag</span>
                    </div>
                    <div className="shareOption">
                        <Room htmlColor="red" />
                        <span>Location</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotions htmlColor='goldenrod'/>
                        <span>Feelings</span>
                    </div>
                  </div> 
                  <button type="submit">Share</button>               
                </form>    
            </div>           
        </div>
    )
}

export default Share
