
import React,{ useEffect, useContext, useState} from 'react'
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import { Add, FlashOnRounded, Remove, Settings} from '@material-ui/icons'
import Friends from './Friends';
import { Link } from 'react-router-dom'

function ProfileRightBar({user}) {
    const {user:currentUser} = useContext(AuthContext);
    const [friends, setFriends] = useState([])
    const [followed, setFollowed] = useState(FlashOnRounded);
    console.log(followed)

    // send request to get all
    useEffect(()=>{
      const getFriends = async ()=>{
        try{
         const friendsList = await axios.get(`https://petitcoeur.herokuapp.com/api/users/friends/`+user._id)
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
                await axios.put(`https://petitcoeur.herokuapp.com/api/users/${user._id}/unfollowers`,{
                    userId: currentUser.user._id,
                });
               setFollowed(false)
            } else {
                await axios.put(`https://petitcoeur.herokuapp.com/api/users/${user._id}/followers`,{
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
                <div className="rightbarInfoContainer">
                  <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                      <p>Name:
                        <span>{user.username}</span>
                      </p>
                    </div>
                    <div className="rightbarInfoItem">
                      <p>Race:
                        <span>{user.race}</span>
                      </p>
                    </div>
                    <div className="rightbarInfoItem">
                      <p>Sex:
                        <span>{user.sex}</span>
                      </p>
                    </div>
                    <div className="rightbarInfoItem">
                      <p>City:
                        <span>{user.from}</span>
                      </p>
                    </div>
                    <div className="rightbarInfoItem">
                      <p>Birthday:
                        <span>{user.birthday}</span>
                      </p>
                    </div>

                  </div>

                 
                  {/* set profile page */}
                  <Link to={ `/setProfile/${user._id}`}>
                    <Settings />
                  </Link>
                  

                  
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
