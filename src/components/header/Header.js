import React from 'react'
import './header.scss'
import {Search, Person, Chat, NotificationsActive } from '@material-ui/icons';
import {Link} from 'react-router-dom'
/* import {BrowerRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom' */

function Header() {
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
                <img src="assets/photo1.jpg" alt="" className="headerImg" />
                
            </div>
            
        </div>
    )
}

export default Header
