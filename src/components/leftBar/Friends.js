import React from 'react'

function Friends({user}) {
    return (
        <div>
            <ul className="leftBarFrindList">
                   <li className="leftBarItem">
                     <img src={user.profilePicture} alt="" className="leftBarImg" />
                     <span className="leftBarFriendName">{user.username}</span>                    
                   </li>  
            </ul>
            
        </div>
    )
}

export default Friends
