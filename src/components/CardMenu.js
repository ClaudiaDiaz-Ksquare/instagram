import React from 'react'
import "../styles/cardmenu.css"
import { ReactComponent as Like } from "../imgs/notifications.svg"; 
import { ReactComponent as Comment } from "../imgs/comment.svg"; 
import { ReactComponent as Share } from "../imgs/share.svg"; 
import { ReactComponent as Save } from "../imgs/save.svg"; 

const CardMenu = () => {
  return (
    <div className='cardMenu'>
        <div className='interactions'>
            <Like className="icon"/>
            <Comment className="icon"/>
            <Share className="icon"/>
        </div>
            <Save className="icon"/>
    </div>
  )
}

export default CardMenu