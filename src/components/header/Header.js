import React,{ useContext } from 'react'
import './header.scss'
import {Search, Person, Chat, NotificationsActive } from '@material-ui/icons';
import {Link} from 'react-router-dom'
import {AuthContext} from '../../context/AuthContext'


function Header() {
    const { user } = useContext( AuthContext );
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
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
                    <span className="headerLink">Home Page</span>
                    <span className="headerLink">Timeline</span>     
                </div>
                <div className="headerIcons">
                    <div className="headerIconItem">
                        <Person />
                        <span className="headerIconBadge">1</span>
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
                <Link to={ `/profile/${user.username}`}>
                  <img src={ user.profilePicture ? PF + user.profilePicture : PF + "person/avatar.png" } alt="" className="headerImg" />
                </Link>
                
                
            </div>
            
        </div>
    )
}

export default Header
