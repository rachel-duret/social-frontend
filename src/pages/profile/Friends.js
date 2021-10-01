import React from 'react'

function Friends({friend}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER 
  
    return (
        <div>
            <ul className="rightBarFrindList">
                   <li className="rightBarItem">
                     <img src={friend.profilePicture? friend.profilePicture: PF+'person/avatar.png'} alt="" className="rightBarImg" />
                     <span className="rightBarFriendName">{friend.username}</span>                    
                   </li>  
            </ul>
            
        </div>
    )
}

export default Friends
