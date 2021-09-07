import React from 'react'
import './rightBar.scss';


function RightBar() {
   
    const HomeRightBar = ()=>{
        return(
            <>
              <div className="birthdayContainer">
                <img src="./assets/cake.png" alt="" />
                <span>
                    <b>Rachel Ku</b> and <b>3 others </b> have a birthday today
                </span>
              </div>
            <img src="./assets/photo3.png" alt="" className="rightBarAd" />
            <h4>Online Friends</h4>
           {/*  {
                friends.map(user=>(
                    <OnlineUser key={user._id} user={user} />
                ))
            } */}
           
            
        </>
           
        )
    }



 
    return (
        <div className="rightbar">
          
                <HomeRightBar />
            
        </div>
    )
}

export default RightBar

