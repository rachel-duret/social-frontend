import React from 'react'
import './share.scss'
import {PermMedia, Label, Room, EmojiEmotions} from '@material-ui/icons'

function Share() {
    return (
        <div className='share'>
            <div className="shareCantainer">
                <div className="shareTop">
                    <img src="/assets/photo1.jpg" alt="" className="shareImg" />
                    <input type="text" className="shareInput" placeholder="What's in your mind ?" />
                </div>
                <hr/>
                
                <div className="shareBtn">
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

                </div>
                


            </div>
           
        </div>
    )
}

export default Share
