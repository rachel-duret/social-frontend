import React from 'react'
import './leftBar.scss'
import {
    RssFeed,
    Chat,
    PlayCircleFilledOutlined,
    Group,
    Bookmark,
    HelpOutline,
    WorkOutline,
    Event,
    School,
  } from "@material-ui/icons";

function LeftBar() {
    return (
        <div>
            <div className="leftBar">
            <div className="leftBarContainer">
                <ul className="leftBarList">
                    <li className="leftBarListItem">
                        < RssFeed />
                        <span>Feed</span>
                    </li>
                </ul>
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
                        <Bookmark />
                        <span>Bookmarks</span>
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
                        < WorkOutline />
                        <span>Jobs</span>
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
                        <span>Courses</span>
                    </li>
                </ul>
               <button className="leftBarBtn">Show More</button>
               <hr />
               <ul className="leftBarFrindList">
                   <li className="leftBarItem">
                     <img src="/assets/photo1.jpg" alt="" className="leftBarImg" />
                     <span className="leftBarFriendName">Rachel ku</span>                    
                   </li>
                   <li className="leftBarItem">
                     <img src="/assets/photo1.jpg" alt="" className="leftBarImg" />
                     <span className="leftBarFriendName">Rachel ku</span>                    
                   </li>
                   <li className="leftBarItem">
                     <img src="/assets/photo1.jpg" alt="" className="leftBarImg" />
                     <span className="leftBarFriendName">Rachel ku</span>                    
                   </li>
                   <li className="leftBarItem">
                     <img src="/assets/photo1.jpg" alt="" className="leftBarImg" />
                     <span className="leftBarFriendName">Rachel ku</span>                    
                   </li>
                   <li className="leftBarItem">
                     <img src="/assets/photo1.jpg" alt="" className="leftBarImg" />
                     <span className="leftBarFriendName">Rachel ku</span>                    
                   </li>
                   <li className="leftBarItem">
                     <img src="/assets/photo1.jpg" alt="" className="leftBarImg" />
                     <span className="leftBarFriendName">Rachel ku</span>                    
                   </li>
                   <li className="leftBarItem">
                     <img src="/assets/photo1.jpg" alt="" className="leftBarImg" />
                     <span className="leftBarFriendName">Rachel ku</span>                    
                   </li>
                </ul>
              
            </div>
        </div>
        </div>
    )
}

export default LeftBar
