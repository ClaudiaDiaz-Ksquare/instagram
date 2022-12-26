import React from 'react'
import "../styles/cards.css"
import Stories from "./Stories.js"
import Card from "./Card"

const Cards = () => {

  const commentsOne = [
    {
      user: "taylorswift",
      text: "Omg, love this",
      id: 1
    }
  ];

  const commentsTwo = [
    {
      user: "barbie_lopez",
      text: "Gpi",
      id: 2
    },
    {
      user: "lau_mendoza",
      text: "Gpi x2",
      id: 3
    }
  ];

  const commentsThree = [
    {
      user: "daniel54",
      text: "Top!!!!",
      id: 4
    }
  ];

  return (
    <div className='cards'>
        <Stories/>

        <Card accountName="juanperez" storyBorder={true} image="https://picsum.photos/600" comments={commentsOne} likedByText="clauaxtle" likedByNumber={128} hours={3}/>
        <Card accountName="luiiiiis" storyBorder={true} image="https://picsum.photos/600/700" comments={commentsTwo} likedByText="pacopaco" likedByNumber={19} hours={1}/>
        <Card accountName="andrea_t98" storyBorder={true} image="https://picsum.photos/600/650" comments={commentsThree} likedByText="mdelarosa6" likedByNumber={312} hours={4}/>
    </div>
  )
}

export default Cards