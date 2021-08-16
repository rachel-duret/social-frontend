import React from 'react'
import './feed.scss';
import  Share from './share/Share'
import Post from './post/Post'
function Feed() {
    return (
        <div className="feed">
            <div className="feedCantainer">
                <Share />
                <Post />
                <Post />

            </div>
            
        </div>
    )
}

export default Feed
