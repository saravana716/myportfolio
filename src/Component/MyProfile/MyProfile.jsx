import React from 'react'
import "./myProfile.css"
import { useNavigate } from 'react-router-dom'
import Myimage from "./1706350975544.png"
import Myimage1 from "./port2.jpg"
import Myimage2 from "./portfolio1.jpg"
import Myimage3 from "./contact.png"
import { GoDotFill } from "react-icons/go";
import { SiIndeed } from "react-icons/si";
import {motion} from "framer-motion"
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
  
    const fadin={
        initial:{
            opacity:0,
            y:300
        },
        animate:{
            opacity:1,
            y:0,
            transition:{
                delay:0.5
            }
        }
    }
    const fadin5={
        initial:{
            opacity:0,
            y:300
        },
        animate:{
            opacity:1,
            y:0,
            transition:{
                delay:0.5
            }
        }
    }
    
    const fadin1={
        initial:{
            opacity:0,
            y:-100
        },
        animate:{
            opacity:1,
            y:0,
            transition:{
                delay:0.10
            }
        }
    }
    const fadin2={
        initial:{
            opacity:0,
            y:-100
        },
        animate:{
            opacity:1,
            y:0,
            transition:{
                delay:0.15
            }
        }
    }
    const fadin3={
        initial:{
            opacity:0,
            y:100
        },
        animate:{
            opacity:1,
            y:0,
            transition:{
                delay:0.20
            }
        }
    }
    const fadin4={
        initial:{
            opacity:0,
            y:100
        },
        animate:{
            opacity:1,
            y:0,
            transition:{
                delay:0.25
            }
        }
    }
  
  return (
    <>
    <Navbar />
    <motion.div className='myprofile' variants={fadin5} initial="initial" whileInView="animate" viewport={{once:true}} >
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
            <motion.div className='myimages' variants={fadin} initial="initial" whileInView="animate" viewport={{once:true}}>
<img src={Myimage} alt="" />
<h1 onClick={gotoabout}>ABOUT</h1>
            </motion.div>
            <div className='mydata'>
                <motion.div className='mydata1'>
                    <motion.div className='Blog' variants={fadin1} initial="initial" whileInView="animate" viewport={{once:true}}>
                        <div className='title'>
   <h2><GoDotFill className='icon' />buzz burst</h2>

                        </div>
    <div className='imgbox'>
<img src={Myimage1} alt="" />
    </div>
    <h1 onClick={gotoportfolio}>PORTFOLIO</h1>
                    </motion.div>
                    <motion.div className='Education' variants={fadin2} initial="initial" whileInView="animate" viewport={{once:true}}>
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
    <h1 onClick={gotoedu}>EDUCATION</h1>

                    </motion.div>
                </motion.div>
                <motion.div className='mydata2'>
                    <motion.div className='portfolio' variants={fadin3} initial="initial" whileInView="animate" viewport={{once:true}}>
                    <div className='title'>
   <h2><GoDotFill className='icon' />buzz burst</h2>

                        </div>
                        <div className='skills'>
                            <div className='skills1'>
                                <img src={Myimage2} alt="" />
                            </div>
                        </div>
    <h1 onClick={gotoskills}>SKILLS</h1>

                    </motion.div>
                    <motion.div className='contact'variants={fadin4} initial="initial" whileInView="animate" viewport={{once:true}}>
                    <div className='title'>
   <h2><GoDotFill className='icon' />buzz burst</h2>

                        </div>
                        <div className='sr1'>
<div className='sr'>
   <img src={Myimage3} alt="" />
    </div> </div>
  <h1 onClick={gotocontact}>Hire Me</h1>

                    </motion.div>
                </motion.div>
            </div>
        </div>
    </motion.div>
    </>
  )
}

export default MyProfile