import React,{ useEffect, useContext, useState} from 'react'
import './rightBar.scss';
import OnlineUser from './OnlineUser';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import {useParams} from 'react-router'; 
import { Add, Remove} from '@material-ui/icons'

function RightBar() {
    const userId = useParams().userId;
    const {user, dispatch} = useContext(AuthContext);
    const [friends, setFriends] = useState([])
    const [followed, setFollowed] = useState(user.followings.includes())

    useEffect(() => {
        const getFriends = async () =>{
            try{
                const friendList = await axios.get('http://localhost:8800/api/users/friends/'+user._id);
                console.log(friendList)
                setFriends(friendList);

            } catch(err){

            }
        }
        getFriends();

    },[user._id])

    useEffect(() => {
        const handleFollow = async () =>{
            try{
                const following = await axios.put(`http://localhost8800/api/users/${user._id}/followers`)

            } catch(err) {

            }
        }

    },[]);


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
            {
                friends.map(user=>(
                    <OnlineUser key={user._id} user={user} />
                ))
            }
           
            
        </>
           
        )
    }


    const ProfileRightBar =() =>{
        return(
            <div className="rightbarProfileContainer">
                <div className="rightbarProfileContainerHeader">
                  <h4>User Information</h4>
                  <button className="followbtn"  >
                   { followed ? "Unfollow" : "Follow" }
                   { followed ? <Remove /> : <Add />}
                  </button>
                 
                </div>            
                <div className="rightbarInfo">
                  <div className="rightbarInfoItem">
                    <span>City:{user.city}</span>
                  </div>
                  <div className="rightbarInfoItem">
                    <span>Relationship:{user.relationship}</span>
                  </div>
                  <div className="rightbarInfoItem">
                    <span>Age:{user.age}</span>
                  </div>
                </div>
            </div>
        )
    }


 
    return (
        <div className="rightbar">
          
                { user._id=== userId? < ProfileRightBar/> : <HomeRightBar />}
            
        </div>
    )
}

export default RightBar

