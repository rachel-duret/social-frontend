import React from 'react'
import './share.scss'
import {PermMedia, Label, Room, EmojiEmotions} from '@material-ui/icons'

function Share() {
    return (
        <div className='share'>
            <div className="shareContainer">
                <div className="shareTop">
                    <img src="/assets/photo1.jpg" alt="" className="shareImg" />
                    <label htmlFor="shareInput"></label>
                    <input type="text" className="shareInput" id="shareInput" placeholder="What's in your mind ?" />
                </div>
                <hr/>
                
                <div className="shareBottom">
                  <div className="shareOptions">
                    <div className="shareOption">
                        <PermMedia htmlColor="green" />
                        <span>Pohoto/Video</span>
                    </div>
                    <div className="shareOption">
                        <Label htmlColor="blue" />
                        <span>Tag</span>
                    </div>
                    <div className="shareOption">
                        <Room htmlColor="red" />
                        <span>Location</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotions htmlColor='goldenrod'/>
                        <span>Feelings</span>
                    </div>
                  </div> 
                  <button>Share</button>               
                </div>    
            </div>           
        </div>
    )
}

export default Share
