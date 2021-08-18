import React,{useState, useEffect} from 'react'
import Feed from '../../components/feed/Feed'
import Header from '../../components/header/Header'
import LeftBar from '../../components/leftBar/LeftBar'
import RightBar from '../../components/rightBar/RightBar'
import axios from 'axios';
import './profile.scss'
import {useParams} from 'react-router'; 

function Profile() {
  /*   const PF = process.env.REACT_APP_PUBLIC_FOLDER; */
    const [user, setUser]= useState({});
    const username = useParams().username;

    useEffect(()=>{
        const fetchUser = async ()=>{
            const res = await axios.get(`http://localhost:8800/api/users?username=${username}`);
            setUser(res.data);
        }
        fetchUser();
    },[username])
    return (
        <div className="profile">
            <Header />
            <div className="profileBody">
                <div className="profileLeft">
                    <LeftBar />
                </div>
                <div className="profileRight">
                    <div className="profileCove">
                        <img src="./assets/photo3.png" className="profileCoveImg" alt="" />
                        <img src="./assets/person/7.jpeg" alt="" className="profileImg" />

                    </div>
                    <div className="profileInfo">
                        <h4>{user.username}</h4>
                        <span>{user.desc}</span>
                    </div>
                    <div className="profileRightBottom">
                        <Feed username={username} />
                        <RightBar profile />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Profile