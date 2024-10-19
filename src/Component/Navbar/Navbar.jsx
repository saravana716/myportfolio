import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import {motion} from "framer-motion"
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseCircle } from "react-icons/io5";
const Navbar = () => {
  function movelistcon(params) {
    let list=document.querySelector(".list")
    list.classList.add("moves")
    let closeicon=document.querySelector(".closemenu")
    closeicon.classList.add("close")
    let menu=document.querySelector(".burgermenu")
    menu.classList.add("not")
  }
  function movelistcon1(params) {
    let myc=document.querySelector(".closemenu")
    myc.classList.remove("close")
    let menu=document.querySelector(".burgermenu")
    menu.classList.remove("not")
    let list=document.querySelector(".list")
    list.classList.remove("moves")
  }
  const fadin={
    initial:{
        opacity:0,
        x:300
    },
    animate:{
        opacity:1,
        x:0,
        transition:{
            delay:0.5
        }
    }
}
const fadin1={
  initial:{
      opacity:0,
      x:-300
  },
  animate:{
      opacity:1,
      x:0,
      transition:{
          delay:0.5
      }
  }
}
  return (
    <>
    <div className='navbar'>
        <div className='navbar1'>
        <GiHamburgerMenu className='burgermenu' onClick={movelistcon} />
        <IoCloseCircle className='closemenu' onClick={movelistcon1} />
            <h1 variants={fadin} initial="initial" whileInView="animate" viewport={{once:true}}>SARAVANAPRIYAN.</h1>
            <div className='list'>
           <motion.div className='list1'variants={fadin1} initial="initial" whileInView="animate" viewport={{once:true}}>
    
           <Link to="/home"><h4 className='active'>Home</h4></Link>
            <Link to="/about"><h4>About Me</h4></Link>
            <Link to="/portfolio"><h4>Portfolio</h4></Link>
            <Link to="/skills"><h4>Skills</h4></Link>
            <Link to="/education"><h4>Education</h4></Link>
            <Link to="/contact"><h4>Hire me</h4></Link>
           </motion.div> </div>
        </div>
    </div>
    </>
  )
}

export default Navbar