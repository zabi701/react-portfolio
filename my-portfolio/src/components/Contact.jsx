import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import './Navbar'
import './responsive.css'
const Contact = () => {
  return(
    <div className="container contact" id='contact'>
      <h1>CONTACT</h1>
      <div className="contact-icon">
        <a href='https://instagram.com' target='_blank' className='items'>
        <FaInstagram className='icon'/>
        </a>
        <a href='https://www.facebook.com' target='_blank' className='items'>
          <CiFacebook className='icon'/></a>
          <a href='https://www.linkind.com' target='_blank' className='items'>
          <CiLinkedin className='icon'/></a>
          <a href='https://www.twitter.com' target='_blank' className='items'>
          <FaSquareXTwitter className='icon' /></a>
          <a href='https://www.github.com' target='_blank' className='items'>
          <FaGithub className='icon'/></a>
      </div>
    </div>
  )
}

export default Contact