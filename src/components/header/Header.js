import React,{ useContext } from 'react'
import './header.scss'
import {Search,  Chat, NotificationsActive } from '@material-ui/icons';
import {Link ,useHistory} from 'react-router-dom'
import {AuthContext} from '../../context/AuthContext'


function Header() {
    const { user } = useContext( AuthContext );
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const history =useHistory()
    

    const handleLogout = ()=>{
        localStorage.removeItem('user');
        history.push('/login')
        window.location.reload()
    }
    return (
        <div className="headerContainer">
            
            <div className="headerLeft">
                <Link to="/" >
                  <h1 className="logo">PetitCœur</h1>
                  <img src={PF+'./barbie.png'} alt="" />
                </Link>                         
            </div>

            <div className="headerCenter">
                <div className="searchBar">
                    <Search classname="searchIcon" />
                    <input type="text" className="searchInput" placeholder="Search for friend or post ..." />
                </div>
            </div>

            {user && (
                <div className="headerRight">
                <div className="headerLinks">
                <Link to="/" >
                  <span className="headerLink">Home </span>  
                </Link>
                      
                </div>
                <div className="headerIcons">
                   
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
                  <img src={ user.user.profilePicture ?  user.user.profilePicture : PF + "person/avatar.png" } alt="" className="headerImg" />
                </Link>
                <div >
                       <botton className="logout" onClick={handleLogout}>Logout</botton>
                </div>
                
                
            </div>
            )}
            
            
        </div>
    )
}

export default Header
