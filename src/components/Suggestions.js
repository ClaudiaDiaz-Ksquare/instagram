import React from 'react'
import "../styles/suggestions.css"
import Profile from './Profile'

const Suggestions = () => {
  return (
    <div className='suggestions'>
        <div className='titleContainer'>
            <div className='title'>Suggestions for you</div>
            <a href='/'>See all</a>
        </div>

        <Profile caption="Followed by vickys13 + 5 more" urlText="Follow" iconSize="medium" captionSize="small" storyBorder={true}/>
        <Profile caption="Followed by clauaxtle + 8 more" urlText="Follow" iconSize="medium" captionSize="small"/>
        <Profile caption="Follows you" urlText="Follow" iconSize="medium" captionSize="small" storyBorder={true}/>
        <Profile caption="Followed by pacopaco + 7 more" urlText="Follow" iconSize="medium" captionSize="small"/>
        <Profile caption="Followed by mariabecerra" urlText="Follow" iconSize="medium" captionSize="small"/>
    </div>
  )
}

export default Suggestions