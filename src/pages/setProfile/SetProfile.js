import React,{useContext, useRef, useState} from 'react'
import './setProfile.scss'
import Header from '../../components/header/Header'
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios'
import {useParams} from 'react-router'; 


function SetProfile() {

  const raceRef = useRef();
  const birthdayRef = useRef();
  const  fromRef= useRef();
  const sexRef = useRef();
  const {user: currentUser } = useContext(AuthContext);
  const [profileCoveFile, setProfileCoveFile]= useState('');
  const [profileFile, setProfileFile]= useState('')
  const id = useParams().userId;

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
    if(profileCoveFile ){
      console.log(profileFile,profileCoveFile)
      const data = new FormData();
      const fileName = Date.now()+profileCoveFile.name;
      data.append('name', fileName);
      data.append('file', profileCoveFile);
      newProfile.coverPicture = fileName
      try{
        await axios.post('http://localhost:8800/api/upload', data)

      }catch(err){
        console.log(err)

      }
    };
    if(profileFile ){
      const data = new FormData();
      const fileName = Date.now()+profileFile.name;
      data.append('name', fileName);
      data.append('file', profileFile);
      newProfile.profilePicture = fileName

      try{
        await axios.post('http://localhost:8800/api/upload', data)

      }catch(err){
        console.log(err)

      }
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
                      <input id="profileCove" type="file" onChange={(e)=>{setProfileCoveFile(e.target.files[0])}} />
                    </div>
                    <div className="userItem">
                      <label htmlFor="profilePic">Profile Picture:</label>
                      <input id="profilePic" type="file" onChange={(e)=>{setProfileFile(e.target.files[0])}} />
                    </div>
                    <button type="submit">Update</button>
                  
                    
                    
                </form>
                
            </div>
        </div>
    )
}

export default SetProfile
