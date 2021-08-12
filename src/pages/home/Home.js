import React from 'react'
import './home.scss';
import Header from '../../components/header/Header'
import Feed from '../../components/feed/Feed'
import RightBar from '../../components/rightBar/RightBar'
import SideBar from '../../components/leftBar/LeftBar'

function Home() {
    return (
        <>
            <Header />
            <div className="section">
              <SideBar />
              <Feed />
              <RightBar />
            </div>
            
        </>
    )
}

export default Home  
