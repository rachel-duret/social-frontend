import React from 'react'
import './rightBar.scss'

function OnlineUser({user}) {
    return (
        <div className="onlineUser">
        
            <ul className="rightbarFriends">
                <li className="rightBarFriendList">
                    <div className="rightBarImgContainer">
                      <img src={user.profilePicture} alt=""className="rightBarImg" />
                      <span></span>
                    </div>
                    <span className="rightBarUsername">{user.username}</span>
                </li>
            </ul>
        </div>
    )
}

export default OnlineUser
