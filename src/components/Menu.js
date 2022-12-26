import React from "react";
import "../styles/menu.css"
// To import icons its important to use the ReactComponent as IconName
import { ReactComponent as Home } from "../imgs/home.svg"; 
import { ReactComponent as Create } from "../imgs/create.svg"; 
import { ReactComponent as Notifications } from "../imgs/notifications.svg"; 
import { ReactComponent as Explore } from "../imgs/explore.svg"; 
import { ReactComponent as Dms } from "../imgs/dms.svg"; 
import ProfileIcon from "./ProfileIcon"
import image from "../imgs/profile.jpg"

const Menu = () => {
    return (
        // All these represent icons, which were taken from IG's page, inspecting and copying the svg
        // We wrap them in a menu container to export the and adding later to the navbar component
        <div className="menu">
            <Home className="icon"/>
            <Dms className="icon"/>
            <Create className="icon"/>
            <Explore className="icon"/>
            <Notifications className="icon"/>
            <ProfileIcon iconSize="small" image={image} storyBorder={false}/>
        </div>
    );
}

export default Menu