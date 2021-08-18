import React from 'react'
import './rightBar.scss'

function OnlineUser({user}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER 
    return (
        <div className="onlineUser">
        
            <ul className="rightbarFriends">
                <li className="rightBarFriendList">
                    <div className="rightBarImgContainer">
                      <img src={PF+user.profilePicture} alt=""className="rightBarImg" />
                      <span></span>
                    </div>
                    <span className="rightBarUsername">{user.username}</span>
                </li>
            </ul>
        </div>
    )
}

export default OnlineUser
