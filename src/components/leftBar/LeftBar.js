import React from 'react'
import './leftBar.scss'
import {
    Chat,
    PlayCircleFilledOutlined,
    Group,
    HelpOutline,
    WorkOutline,
    Event,
    School,
  } from "@material-ui/icons";

function LeftBar() {
   
    return (
        
        <div className="leftBar">
            <div className="leftBarContainer">
                <ul className="leftBarList">
                    <li className="leftBarListItem">
                        < Chat />
                        <span>Chats</span>
                    </li>
                </ul>
                <ul className="leftBarList">
                    <li className="leftBarListItem">
                        < PlayCircleFilledOutlined />
                        <span>Videos</span>
                    </li>
                </ul>
                <ul className="leftBarList">
                    <li className="leftBarListItem">
                        <Group />
                        <span>Groups</span>
                    </li>
                </ul>
               
                <ul className="leftBarList">
                    <li className="leftBarListItem">
                        <HelpOutline />
                        <span>Questions</span>
                    </li>
                </ul>
               
                <ul className="leftBarList">
                    <li className="leftBarListItem">
                        < Event />
                        <span>Events</span>
                    </li>
                </ul>
                <ul className="leftBarList">
                    <li className="leftBarListItem">
                        < School />
                        <span>Education</span>
                    </li>
                </ul>
               <button className="leftBarBtn">Show More</button>
               <hr />
             {/*   {
                   Users.map(user=>(
                       <Friends key={user.id} user={user} />
                   ))
               } */}
               
              
            </div>
        </div>
        
    )
}

export default LeftBar
