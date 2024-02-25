import React from 'react'
import "./About.css"
import Myimage8 from "../1708772584047.JPEG"
import { GoDotFill } from "react-icons/go";
import Navbar from '../Navbar/Navbar';

const About = () => {
  return (
    <>
    <Navbar />
    <div className='about'>
        <div className="about1">
            <div className='about2'>
               <div className='myimages12345'>
               <div className='aboutimg'>
                    <img src={Myimage8} alt="" />
                </div>
                <h4>ABOUT US</h4>
               </div>
               <h3><GoDotFill className='icon' />biography & abilities</h3>
            </div>
            <div className='aboutme'>
                <div className='mycontent'>
                <div className='aboutme1'>
                    <h1>Saravanapriyan</h1>
                    <h5>FullStackDevelopher</h5>
                </div>
                <div className='aboutimages'>
                    <img src={Myimage8} alt="" />
                </div>
                </div>
                <div className='mycontent1'>
                <h2>I'M SARAVANAPRIYAN, A SKILLED AND INNOVATIVE FULLSTACK DEVELOPHER. MY EXPERTISE LIES IN CREATING INTUITIVE AND VISUALLY APPEALING U EXPERIENCES THAT CAPTIVATE USERS.</h2>

               <div className='PersonalInfo'>
                <div className='info'>
                    <h3>Name :</h3>
                    <h3 title=''>Saravanapriyan</h3>
                </div>
                <div className='info'>
                    <h3>Email :</h3>
                    <h3 title=''>vsaravana716@gmail.com</h3>
                </div>
                <div className='info'>
                    <h3>Phone :</h3>
                    <h3 title=''>9342508799</h3>
                </div>
                <div className='info'>
                    <h3>Date of birth :</h3>
                    <h3 title=''>21 May 2000</h3>
                </div>
                <div className='info'>
                    <h3>Nationality :</h3>
                    <h3 title=''>Indian</h3>
                </div>
                <div className='info'>
                    <h3>Address :</h3>
                    <h3 title=''>Sivakasi,Tamilnadu-626130</h3>
                </div>
               </div>
               <div className='btn'>
                <button><h6>RESUME</h6></button>
                <button><h6>CONTACT</h6></button>
               </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default About