import React from 'react';
import "../styles/sidebar.css";
import Sticky from "react-sticky-el";
import Suggestions from "./Suggestions";
import Footer from "./Footer";
import image from "../imgs/profile.jpg";
import Profile from './Profile';

const Sidebar = () => {
  return (
        <Sticky topOffset={-80}>
          <div className='sidebar'>
            <Profile username="dannaaaeeeee" caption="Dannaé Díaz" urlText="Switch" iconSize="large" image={image}/>
            <Suggestions/>
            <Footer/>
          </div>
        </Sticky>
  )
}

export default Sidebar;