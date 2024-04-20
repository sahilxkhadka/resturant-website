import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi"
import './Footer.css';
import { Newsletter, FooterOverlay } from '../../components';
import {images} from "../../constants"
const currentYear = new Date().getFullYear()
const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Kathmandu, Nepal</p>
        <p className="p__opensans">01-4621181</p>
        <p className="p__opensans">01.4621182</p>
      </div>
      <div className="app__footer-links_logo">
        <img src = {images.logo} alt = "logo" />
        <p className="p__opensans">The best in class and quality all over nepal.</p>
        <img src = {images.spoon} alt = "spoon" className='spoon__img' style={{marginTop: "15px"}} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday - Friday</p>
        <p className="p__opensans">10:00 am - 10:00 pm</p>
        <p className="p__opensans">Saturday - Sunday</p>
        <p className="p__opensans"> 9:00 am - 11:00 pm</p>
      </div>
    </div>
    <div className="footer__copyRight">
      <p className="p__opensans">&#169; {currentYear} Local Khana All Rights Reserved</p>
    </div>
  </div>
);

export default Footer;
