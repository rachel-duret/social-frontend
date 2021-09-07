import React from 'react'

function Friends({friend}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER 
  
    return (
        <div>
            <ul className="leftBarFrindList">
                   <li className="leftBarItem">
                     <img src={friend.profilePicture? PF+friend.profilePicture: PF+'person/avatar.png'} alt="" className="leftBarImg" />
                     <span className="leftBarFriendName">{friend.username}</span>                    
                   </li>  
            </ul>
            
        </div>
    )
}

export default Friends
