import React from 'react'

function Friends({user}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER 
    return (
        <div>
            <ul className="leftBarFrindList">
                   <li className="leftBarItem">
                     <img src={PF+user.profilePicture} alt="" className="leftBarImg" />
                     <span className="leftBarFriendName">{user.username}</span>                    
                   </li>  
            </ul>
            
        </div>
    )
}

export default Friends
