import React,{useContext, useRef, useState} from 'react'
import './setProfile.scss'
import Header from '../../components/header/Header'
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios'
import {useParams} from 'react-router'; 
import ProgressBar from '../../components/ProgressBar'
import {storage} from '../../fireBase/config'


function SetProfile() {

  const raceRef = useRef();
  const birthdayRef = useRef();
  const  fromRef= useRef();
  const sexRef = useRef();
  const {user: currentUser } = useContext(AuthContext);
  const [profileCoverFile, setProfileCoverFile]= useState('');
  const [profileFile, setProfileFile]= useState('')
  const [profileCoverPictureUrl, setProfileCoverPictureUrl]= useState('');
  const [profilePictureUrl, setProfilePictureUrl]= useState('')
  const id = useParams().userId;
  const types = ['image/png','image/jpeg'];
  const [error, setError] = useState(null);
 

  const handleProfileUpdate = async (e)=>{
    e.preventDefault();
    const newProfile = {
      userId: currentUser.user._id,
     race:raceRef.current.value,
     birthday:birthdayRef.current.value,
     from:fromRef.current.value,
     sex:sexRef.current.value

    }
    console.log(newProfile)
    if(profileCoverFile ){
      //if there is an image file then upload the image to firebase- storage
      const uploadTask = storage.ref('profileCoverImages/'+profileCoverFile.name).put(profileCoverFile);
      uploadTask.on(
          'state_changed',
          snapshot=>{},
          error=>{console.log(error)},
          ()=>{
              storage
              .ref("profileCoverImages")
              .child(profileCoverFile.name)
              .getDownloadURL()
              .then(url => {
                  console.log(url)
                setProfileCoverPictureUrl(url);
              })
          }
      )
     
      newProfile.coverPicture = profileCoverPictureUrl
     
    };
    if(profileFile ){
     //if there is an image file then upload the image to firebase- storage
     const uploadTask = storage.ref('profileImages/'+profileFile.name).put(profileFile);
     uploadTask.on(
         'state_changed',
         snapshot=>{},
         error=>{console.log(error)},
         ()=>{
             storage
             .ref("profileImages")
             .child(profileFile.name)
             .getDownloadURL()
             .then(url => {
                 console.log(url)
               setProfilePictureUrl(url);
             })
         }
     )
    
     newProfile.profilePicture = profilePictureUrl
    };
    console.log(newProfile)

    try{
      const res = await axios.put('http://localhost:8800/api/users/'+id,newProfile)

    }catch(err){

    }

  }
    return (
        <div className="settingProfileContainer">
            <Header />
            <div className="settingProfileBody">
                <form onSubmit={handleProfileUpdate}>
                    <div className="userItem">           
                      <label htmlFor="race">
                      Race                    
                      </label>
                      <input id="username" type="text" ref={raceRef} />
                      
                    </div>
                    <div className="userItem">
                      <label htmlFor="birthday">Birthday</label>
                      <input id="birthday" type="date" ref={birthdayRef} />
                    </div>
                    <div className="userItem">
                      <label htmlFor="birthday">From</label>
                      <input id="birthday" type="text" ref={fromRef} />
                    </div>
                    <div className="userItem">
                       <label htmlFor="sex"> Sex</label>
                        <select id="sex"ref={sexRef}>
                            <option value="female" selected>Female</option>
                            <option value="male">Male</option>
                        </select>         
                    </div>
                    <div className="userItem">
                      <label htmlFor="profileCove">Profile cover Picture:</label>
                      <input type="file" className="file" id="file" onChange={(e)=>{setProfileCoverFile(e.target.files[0])}} />
                     
                    </div>
                    <div className="userItem">
                      <label htmlFor="profilePic">Profile Picture:</label>
                      <input type="file" className="file" id="file" onChange={(e)=>{setProfileFile(e.target.files[0])}} />
                     
                    </div>
                    <button type="submit">Update</button>
                  
                    
                    
                </form>
                
            </div>
        </div>
    )
}

export default SetProfile
