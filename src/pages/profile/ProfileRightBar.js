
import React,{ useEffect, useContext, useState} from 'react'
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import { Add, FlashOnRounded, Remove} from '@material-ui/icons'
import Friends from './Friends';

function ProfileRightBar({user}) {
    const {user:currentUser} = useContext(AuthContext);
    const [friends, setFriends] = useState([])
    const [followed, setFollowed] = useState(FlashOnRounded);
    console.log(followed)

    // send request to get all
    useEffect(()=>{
      const getFriends = async ()=>{
        try{
         const friendsList = await axios.get(`http://localhost:8800/api/users/friends/`+user._id)
         /*  console.log(friendsList.data) */
          setFriends(friendsList.data)

        } catch(err){
          console.log(err)
        }
      
      };
      getFriends();
    },[user._id])

    const handleFollow = async () =>{
        try{
            if(followed){
                await axios.put(`http://localhost:8800/api/users/${user._id}/unfollowers`,{
                    userId: currentUser.user._id,
                });
               setFollowed(false)
            } else {
                await axios.put(`http://localhost:8800/api/users/${user._id}/followers`,{
                    userId: currentUser.user._id,
                });
                setFollowed(true)
            }
            

        } catch(err){
          console.log(err);

        }
    }
    return (

        <div className="rightbarProfileContainer">
                <div className="rightbarProfileContainerHeader">
                  {/* <h4>User Information</h4> */}
                  {
                      user._id !== currentUser.user._id 
                      &&
                      <button className="followbtn" onClick={handleFollow} >
                   { followed ? "Unfollow" : "Follow" }
                   { followed ? <Remove /> : <Add />}
                  </button>
                  }
                  
                 
                </div>            
                <div className="rightbarInfo">
                  <div className="rightbarInfoItem">
                    <span>username:{user.username}</span>
                  </div>
                  <div className="rightbarInfoItem">
                    <span>City:</span>
                  </div>
                  <div className="rightbarInfoItem">
                    <span>Relationship:</span>
                  </div>
                  <div className="rightbarInfoItem">
                    <span>Age:</span>
                  </div>
                </div>
                <hr/>
               {
                 friends.map(friend=>(
                  <Friends key={friend._id} friend={friend} />
              ))
               }

                
            </div>
    )
}

export default ProfileRightBar
