import React from 'react'
import './rightBar.scss';
import OnlineUser from './OnlineUser';
import { Users} from '../../datas'

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
            {
                Users.map(user=>(
                    <OnlineUser key={user.id} user={user} />
                ))
            }
           
            
        </div>
    )
}

export default RightBar

