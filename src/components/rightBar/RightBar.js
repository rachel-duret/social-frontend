import React from 'react'
import './rightBar.scss';

function RightBar() {
    return (
        <div className="rightBar">
            <div className="birthdayContainer">
                <img src="./assets/cake.png" alt="" />
                <span>
                    <b>Rachel Ku</b> and <b>3 others </b> have a birthday today
                </span>
            </div>
            <img src="./assets/photo3.png" alt="" className="rightBarAd" />
            <h4>Online Friends</h4>
            <ul className="rightbarFriends">
                <li className="rightBarFriendList">
                    <div className="rightBarImgContainer">
                      <img src="./assets/photo2.jpg" alt=""className="rightBarImg" />
                      <span></span>
                    </div>
                    <span className="rightBarUsername">Rachel Ku</span>
                </li>
                <li className="rightBarFriendList">
                    <div className="rightBarImgContainer">
                      <img src="./assets/photo2.jpg" alt=""className="rightBarImg" />
                      <span></span>
                    </div>
                    <span className="rightBarUsername">Rachel Ku</span>
                </li>
            </ul>
            
        </div>
    )
}

export default RightBar

