import React from 'react'
import './feed.scss';
import  Share from './share/Share'
import Post from './post/Post'
import {Posts} from '../../datas';
function Feed() {
    return (
        <div className="feed">
            <div className="feedCantainer">
                <Share />
                {
                    Posts.map(p =>( <Post key={p.id} post={p} />))
                }
              
               

            </div>
            
        </div>
    )
}

export default Feed
