import React from 'react'
import "./myProfile.css"
import { useNavigate } from 'react-router-dom'
import Myimage from "./1706350975544.png"
import Myimage1 from "./port2.jpg"
import Myimage2 from "./portfolio1.jpg"
import Myimage3 from "./contact.png"
import { GoDotFill } from "react-icons/go";
import { SiIndeed } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { LuSchool } from "react-icons/lu";
import { BiSolidSchool } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineSchool } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import Navbar from '../Navbar/Navbar'
const MyProfile = () => {
    const navigates=useNavigate()
    function gotoabout(params) {
        navigates("/about")
    }
    function gotoportfolio(params) {
        navigates("/portfolio")
    }
    function gotoskills(params) {
        navigates("/skills")
    }
    function gotoedu(params) {
        navigates("/education")
    }
    function gotocontact(params) {
        navigates("/contact")
    }
  return (
    <>
    <Navbar />
    <div className='myprofile'>
        <div className='links'>
        <a href="https://profile.indeed.com/?hl=en_IN&co=IN&from=gnav-messaging--messaging-webapp">
 <span> <SiIndeed className='socialmedia' /></span>

        </a>

<a href="https://www.linkedin.com/in/saravanapriyan-v-796533274/">
<span><FaLinkedinIn  className='socialmedia'/></span>

</a>

        <a href="https://www.instagram.com/saravanan.va_7/">
        <span><FaInstagram className='socialmedia'/></span>

        </a>
        <a href="https://twitter.com/vsaravana716">
        <span><FaXTwitter className='socialmedia'/></span>

        </a>
        <a href="https://www.facebook.com/profile.php?id=61556836677405">
       <span> <FaFacebookF className='socialmedia'/></span>

        </a>
       <a href="https://wa.me/9342508799/?text=Enquiry">
       <span><FaWhatsapp className='socialmedia'/></span>
        </a> 
        </div>
        <div className='myprofile1'>
            <div className='myimages' onClick={gotoabout}>
<img src={Myimage} alt="" />
<h1>ABOUT</h1>
            </div>
            <div className='mydata'>
                <div className='mydata1'>
                    <div className='Blog' onClick={gotoportfolio}>
                        <div className='title'>
   <h2><GoDotFill className='icon' />buzz burst</h2>

                        </div>
    <div className='imgbox'>
<img src={Myimage1} alt="" />
    </div>
    <h1>PORTFOLIO</h1>
                    </div>
                    <div className='Education' onClick={gotoedu}>
                    <div className='title'>
                    <h2><GoDotFill className='icon' />buzz burst</h2>
                    </div>
                    <div className='ed'>
                    <div className='edu'>
                        <div className='edu1'>
                        <LuSchool className='ic1'/>
                        </div>
                        <div className='edu1'>
                        <BiSolidSchool className='ic1' />
                        </div>
                        <div className='edu1'>
                        <MdOutlineSchool className='ic1' />
                        </div>
                    </div></div>
    <h1>EDUCATION</h1>

                    </div>
                </div>
                <div className='mydata2'>
                    <div className='portfolio' onClick={gotoskills}>
                    <div className='title'>
   <h2><GoDotFill className='icon' />buzz burst</h2>

                        </div>
                        <div className='skills'>
                            <div className='skills1'>
                                <img src={Myimage2} alt="" />
                            </div>
                        </div>
    <h1>SKILLS</h1>

                    </div>
                    <div className='contact' onClick={gotocontact}>
                    <div className='title'>
   <h2><GoDotFill className='icon' />buzz burst</h2>

                        </div>
                        <div className='sr1'>
<div className='sr'>
   <img src={Myimage3} alt="" />
    </div> </div>
  <h1>Hire Me</h1>

                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default MyProfile