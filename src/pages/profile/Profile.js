import React from 'react'
import Feed from '../../components/feed/Feed'
import Header from '../../components/header/Header'
import LeftBar from '../../components/leftBar/LeftBar'
import RightBar from '../../components/rightBar/RightBar'
import './profile.scss'

function Profile() {
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
                        <h4>User</h4>
                        <span>hello my friend</span>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <RightBar profile />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Profile
