
import React,{ useEffect, useContext, useState} from 'react'
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import { Add, Remove} from '@material-ui/icons'
import Friends from './Friends';

function ProfileRightBar({user}) {
    const {user:currentUser, dispatch} = useContext(AuthContext);
    const [friends, setFriends] = useState([])
    const [followed, setFollowed] = useState(currentUser.followings.includes(user?._id));
    console.log(followed)

    useEffect(()=>{
      const getFriends = async ()=>{
        try{
         const friendsList = await axios.get(`http://localhost:8800/api/users/friends/`+user._id)
          console.log(friendsList.data)
          setFriends(friendsList.data)

        } catch(err){
          console.log(err)
        }
      
      };
      getFriends();
    },[user._id])

    const handleFllow = async () =>{
        try{
            if(followed){
                await axios.put(`http://localhost:8800/api/users/${user._id}/unfollowers`,{
                    userId: currentUser._id,
                });
                dispatch({type:"UNFOLLOW", payload:user._id})
            } else {
                await axios.put(`http://localhost:8800/api/users/${user._id}/followers`,{
                    userId: currentUser._id,
                });
                dispatch({type:"FOLLOW", payload:user._id})
            }
            setFollowed(!followed);

        } catch(err){
          console.log(err);

        }
    }
    return (

        <div className="rightbarProfileContainer">
                <div className="rightbarProfileContainerHeader">
                  {/* <h4>User Information</h4> */}
                  {
                      user._id !== currentUser._id 
                      &&
                      <button className="followbtn" onClick={handleFllow} >
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
                <Friends user={user}/>

                
            </div>
    )
}

export default ProfileRightBar
