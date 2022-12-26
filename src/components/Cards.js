import React from 'react'
import "../styles/cards.css"
import Stories from "./Stories.js"
import Card from "./Card"

const Cards = () => {

  const commentsOne = [
    {
      user: "taylorswift",
      text: "Love this!",
      id: 1
    }
  ]

  return (
    <div className='cards'>
        <Stories/>

        <Card accountName="juanperez" storyBorder={true} image="https://i.imgur.com/sOFrdUB.png" comments={commentsOne} likedByText="clauaxtle" likedByNumber={128} hours={3}/>
    </div>
  )
}

export default Cards