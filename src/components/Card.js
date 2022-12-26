import React from 'react'
import "../styles/card.css"
import Profile from './Profile'
import CardMenu from './CardMenu'
import Comment from './Comment'
import { ReactComponent as Options } from "../imgs/options.svg"; 

const Card = ({storyBorder, image, comments, likedBytext, likedByNum, hours}) => {
  return (
    <div className='card'>
        <header>
            <Profile iconSize="medium" storyBorder={storyBorder}/>
            <Options className="options"/>
        </header>
        <img className='cardImage' src={image} alt="IG Post Image"/>
        <CardMenu/>
        <div className='likedBy'>
            <Profile iconSize="small" hideAccountName={true}/>
            <span>
                Liked by <strong>{likedBytext}</strong> and {" "} <strong>{likedByNum} others</strong>
            </span>
        </div>
        <div className='comments'>
            {comments.map((comment) => <Comment key={comments.id} accountName={comments.user} comment={comment.text} />)}
        </div>
        <div className='timePosted'> {hours} HOURS AGO</div>
        <div className='addComment'>
            <div className='commentText'>Add a comment...</div>
            <div className='postText'>POST</div>
        </div>
    </div>
  )
}

export default Card