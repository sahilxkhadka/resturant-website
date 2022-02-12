import React from 'react';

import './Header.css';
import {images} from "../../constants"
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className="app__wrapper_info">
      <SubHeading 
        title = "Diversity in the taste witin Nepal."
      />
      <h1 className="app__header-h1">The key to fine dining.</h1>
      <p className="p__opensans" style={ {margin: "2rem 0"} } >A perfect place to celebrate from the smallest to the most exciting occasions as well as matter of celebrations with your family, friends and children in a well maintained and friendly environment.</p>
      <button className="custom__button" type='button'>Explore Menu</button>
    </div>
    <div className="app__wrapper_img">
      <img src= {images.welcome} alt="welcome image" />
    </div>
  </div>
);

export default Header;
