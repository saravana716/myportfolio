import React from 'react'
import "./contact.css"
import Navbar from '../Navbar/Navbar'
import my7 from "../IMG_20240223_162336.jpg"
import { MdPhoneIphone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { SiIndeed } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { MdWavingHand } from "react-icons/md";
import { FaAddressBook } from "react-icons/fa";
import { MdOutlinePin } from "react-icons/md";
import { GoDotFill } from "react-icons/go";

const Contact = () => {
  return (
    <>
    <Navbar />
    <div className='mywebsite'>
        <div className='mywebsite1'>
        <div className='about2'>
               <div className='myimages12345'>
               <div className='aboutimg'>
                    <img src={my7} alt="" />
                </div>
                <h4>CONTACT</h4>
               </div>
               <h3><GoDotFill className='icon' />Linking Potential</h3>
            </div>
           
        </div>
    </div>
    <div className='ourcontact123'>
<div className='ourcontact1234'>
<h1>MY CONTACT</h1>
      <h5>"Reach Connections"</h5>
</div>
    </div>
    <div className='spcontact'>
        <div className='spcontact1'>
            <div className='spcontact2'>
            <h1>Contact Information</h1>

            <div className='mycons123456'>
                <h3>Saravanapriyan V</h3>
                <h2><span><MdPhoneIphone className='numicon' /></span>9342508799</h2>
                <h2><span><MdEmail className='numicon'  /></span>vsaravana716@gmail.com</h2>
                <h2><span><FaAddressBook className='numicon'  /></span>3/154A M.Meenatchipuram,Aanaikuttam,Sivakasi</h2>
                <h2><span><MdOutlinePin className='numicon' /></span>626130</h2>
            </div>
            <div className='followus'>
                <h2>Follow Us</h2>
            <div className='links12345'>
               <a href="https://profile.indeed.com/?hl=en_IN&co=IN&from=gnav-messaging--messaging-webapp"> <div className='myconicons'>
       <span> <SiIndeed className='socialmedia' /></span>
    <p>Indeed</p>
                </div></a>
                <a href="https://www.linkedin.com/in/saravanapriyan-v-796533274/">
                <div className='myconicons'>
        <span><FaLinkedinIn  className='socialmedia'/></span>

    <p>Linked in</p>
                </div>
                </a>
                <a href="https://www.instagram.com/saravanan.va_7/">
                <div className='myconicons'>
        <span><FaInstagram className='socialmedia'/></span>

    <p>Instagram</p>
                </div>
                </a>
                <a href="https://twitter.com/vsaravana716">
                <div className='myconicons'>
        <span><FaXTwitter className='socialmedia'/></span>

    <p>Twitter</p>
                </div>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61556836677405">
                <div className='myconicons'>
       <span> <FaFacebookF className='socialmedia'/></span>

    <p>Facebook</p>
                </div>
                </a>
                <a href="https://wa.me/9342508799/?text=Enquiry">
                <div className='myconicons'>
                <span><FaWhatsapp className='socialmedia'/></span>


    <p>Watsapp</p>
                </div>
                </a>
              
               
                
               
               
        </div>
            </div>
            </div>
            <div className='spcontact4'>
                <div className='spcontact5'>
                <h1><MdWavingHand className='hands'/>Just say hello <span>!</span></h1>
                <p>Let us know more About you !</p>
                </div>
                <div className='spcontact6'>
                    <div className='fname'>
                        <input type="text" name="" id="" placeholder='First Name'/>
                        <input type="text" name="" id="" placeholder='Last Name'/>
                    </div>
                    <div className='gomail'>
                        <input type="email" name="" id="" placeholder='Email'/>
                        <input type="tel" name="" id="" placeholder='Phone'/>
                    </div>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                <button><h6>CONTACT</h6></button>

                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact