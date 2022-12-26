import "../styles/profileicon.css"

import React from 'react'

const ProfileIcon = ({iconSize, storyBorder, image}) => {
    // const {iconSize, storyBorder, image} = props;

    function getRandonInt(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max-min+1)) + min;
    }
    
    let randomId = getRandonInt(1,70);

    let profileImg = image ? image : `https://i.pravatar.cc/150?img=${randomId}`;

  return (
    <div className={storyBorder ? "storyBorder" : ""}>
        <img className={`profileIcon ${iconSize}`} src={profileImg} alt="profile"/>
    </div>
  );
}

export default ProfileIcon