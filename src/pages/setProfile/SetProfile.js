import React,{useContext, useRef, useState} from 'react'
import './setProfile.scss'
import Header from '../../components/header/Header'
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios'
import {useParams} from 'react-router'; 
import {storage} from '../../fireBase/config'
import {useHistory} from 'react-router-dom';


function SetProfile() {

  const raceRef = useRef();
  const birthdayRef = useRef();
  const history = useHistory();
  const  fromRef= useRef();
  const sexRef = useRef();
  const {user: currentUser } = useContext(AuthContext);
  const [profileCoverFile, setProfileCoverFile]= useState('');
  const [profileFile, setProfileFile]= useState('')
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
      const fileName = new Date().getTime()+profileCoverFile.name;
      const uploadTask = storage.ref('profileCoverImages/'+fileName).put(profileCoverFile);
      uploadTask.on(
          'state_changed',
          snapshot=>{},
          error=>{console.log(error)},
          ()=>{
              storage
              .ref("profileCoverImages")
              .child(fileName)
              .getDownloadURL()
              .then(url => {
                 newProfile.coverPicture = url
                 try{
                  console.log(newProfile)
                  axios.put('https://petitcoeur.herokuapp.com/api/users/'+id,newProfile)
                  history.push(`/profile/${currentUser.user._id}`)
                 
              }
              catch(err){

              }
              })
          }
      ) 
    }
    if(profileFile ){
     //if there is an image file then upload the image to firebase- storage
     const fileName = new Date().getTime()+profileFile.name;
     const uploadTask = storage.ref('profileImages/'+fileName).put(profileFile);
     uploadTask.on(
         'state_changed',
         snapshot=>{},
         error=>{console.log(error)},
         ()=>{
             storage
             .ref("profileImages")
             .child(fileName)
             .getDownloadURL()
             .then(url => {
              newProfile.profilePicture = url
              try{
               console.log(newProfile)
               axios.put('https://petitcoeur.herokuapp.com/api/users/'+id,newProfile)
               history.push(`/profile/${currentUser.user._id}`)
           }
           catch(err){

           }
             })
         }
     )
    }else{
      try{
        const res = await axios.put('https://petitcoeur.herokuapp.com/api/users/'+id,newProfile)
        console.log(res.data)
        history.push(`/profile/${currentUser.user._id}`)
  
      }catch(err){
  
      }
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
                      <input id="race" type="text" ref={raceRef} required />
                      
                    </div>
                    <div className="userItem">
                      <label htmlFor="birthday">Birthday</label>
                      <input id="birthday" type="date" ref={birthdayRef} required/>
                    </div>
                    <div className="userItem">
                      <label htmlFor="from">From</label>
                      <input id="from" type="text" ref={fromRef} required/>
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
