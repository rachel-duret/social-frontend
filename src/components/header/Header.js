import React,{ useContext } from 'react'
import './header.scss'
import {Search, Person, Chat, NotificationsActive } from '@material-ui/icons';
import {Link } from 'react-router-dom'
import {AuthContext} from '../../context/AuthContext'


function Header() {
    const { user } = useContext( AuthContext );
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    

    const handleLogout = ()=>{
        localStorage.removeItem('user');
        window.location.reload();
    }
    return (
        <div className="headerContainer">
            <div className="headerLeft">
                <Link to="/" >
                  <span className="logo">On patage</span>
                </Link>
                
                
            </div>

            <div className="headerCenter">
                <div className="searchBar">
                    <Search classname="searchIcon" />
                    <input type="text" className="searchInput" placeholder="Search for friend or post ..." />
                </div>
            </div>

            <div className="headerRight">
                <div className="headerLinks">
                    <span className="headerLink">Home </span>    
                </div>
                <div className="headerIcons">
                    <div className="headerIconItem">
                       <botton className="logout" onClick={handleLogout}>Logout</botton>
                    </div>
                    <div className="headerIconItem">
                        <Chat />
                        <span className="headerIconBadge">1</span>
                    </div>
                    <div className="headerIconItem">
                        <NotificationsActive />
                        <span className="headerIconBadge">1</span>
                    </div>
                </div>
                <Link to={ `/profile/${user.user._id}`}>
                  <img src={ user.user.profilePicture ? PF + user.user.profilePicture : PF + "person/avatar.png" } alt="" className="headerImg" />
                </Link>
                
                
            </div>
            
        </div>
    )
}

export default Header
