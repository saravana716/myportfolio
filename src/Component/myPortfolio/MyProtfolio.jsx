import React from 'react'
import Navbar from '../Navbar/Navbar'
import my7 from "../IMG_20240223_155412.jpg"
import Myimage8 from "../Screenshot 2024-02-24 190347.png"
import Myimage9 from "../Screenshot 2024-02-24 190320.png"
import Myimage10 from "../Screenshot 2024-02-24 190305.png"
import Myimage11 from "../Screenshot 2024-02-24 190249.png"
import Myimage12 from "../Screenshot 2024-02-24 190220.png"
import Myimage13 from "../Screenshot 2024-02-24 190158.png"
import Myimage14 from "../Screenshot 2024-02-24 191115.png"
import {motion} from "framer-motion"
import Myimage15 from "../Screenshot 2024-02-24 191102.png"
import Myimage16 from "../Screenshot 2024-02-24 191047.png"
import Myimage17 from "../Screenshot 2024-02-24 191032.png"
import Myimage18 from "../Screenshot 2024-02-24 191015.png"
import Myimage19 from "../Screenshot 2024-02-24 190956.png"
import Myimage20 from "../Screenshot 2024-02-24 191604.png"
import Myimage21 from "../Screenshot 2024-02-24 191547.png"
import Myimage22 from "../Screenshot 2024-02-24 191537.png"
import Myimage23 from "../Screenshot 2024-02-24 191520.png"
import Myimage24 from "../Screenshot 2024-02-24 191501.png"
import Myimage25 from "../Screenshot 2024-02-24 192105.png"
import Myimage26 from "../Screenshot 2024-02-24 192038.png"
import Myimage27 from "../Screenshot 2024-02-24 192021.png"
import Myimage28 from "../Screenshot 2024-02-24 191950.png"
import Myimage29 from "../Screenshot 2024-02-24 191935.png"
import Myimage30 from "../Screenshot 2024-02-24 221658.png"
import Myimage31 from "../Screenshot 2024-02-24 221635.png"
import Myimage32 from "../Screenshot 2024-02-24 221616.png"
import Myimage33 from "../Screenshot 2024-02-24 221548.png"
import Myimage34 from "../Screenshot 2024-02-24 221529.png"
import Myimage35 from "../Screenshot 2024-02-24 222856.png"
import Myimage36 from "../Screenshot 2024-02-24 222839.png"
import Myimage37 from "../Screenshot 2024-02-24 222823.png"
import Myimage38 from "../Screenshot 2024-02-24 222809 - Copy.png"
import Myimage39 from "../Screenshot 2024-02-24 222744 - Copy.png"
import Myimage40 from "../Screenshot 2024-10-20 001858.png"
import Myimage41 from "../Screenshot 2024-10-20 002050.png"
import Myimage42 from "../Screenshot 2024-10-20 002150.png"
import Myimage43 from "../Screenshot 2024-10-20 002115.png"
import Myimage44 from "../Screenshot 2024-10-20 002306.png"
import Myimage45 from "../Screenshot 2024-10-20 003500.png"
import Myimage46 from "../Screenshot 2024-10-20 003521.png"
import Myimage47 from "../Screenshot 2024-10-20 003607.png"
import Myimage48 from "../Screenshot 2024-10-20 003854.png"
import Myimage49 from "../Screenshot 2024-10-20 003909.png"
import Myimage50 from "../Screenshot 2024-10-20 003954.png"
import Myimage51 from "../Screenshot 2024-10-20 004011.png"
import Myimage52 from "../Screenshot 2024-10-20 004042.png"
import Myimage53 from "../Screenshot 2024-10-20 004152.png"
import Myimage54 from "../Screenshot 2024-10-20 004305.png"
import Myimage55 from "../Screenshot 2024-10-20 004321.png"
import Myimage56 from "../Screenshot 2024-10-20 004351.png"
import Myimage57 from "../Screenshot 2024-10-20 004455.png"
import Myimage58 from "../Screenshot 2024-10-20 004656.png"
import Myimage59 from "../Screenshot 2024-10-20 004747.png"
import Myimage60 from "../Screenshot 2024-10-20 004806.png"
import Myimage62 from "../Screenshot 2024-10-20 004839.png"
import Myimage63 from "../Screenshot 2024-10-20 004901.png"

import { GoDotFill } from "react-icons/go";

import "./MyPortfolio.css"
const MyProtfolio = () => {
  const fadin = {
    initial: {
      opacity: 0,
      y: 300,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
      },
    },
  };
  return (
    <>
    <Navbar />
    
    <div className='mywebsite'>
        <div className='mywebsite1'>
        <div className='about2'>
               <div className='myimages12345'>
               <motion.div className='aboutimg' variants={fadin}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}>
                    <img src={my7} alt="" />
                </motion.div>
                <h4>PORTFOLIO</h4>
               </div>
               <motion.h3 variants={fadin}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}><GoDotFill className='icon' />inspiring selection</motion.h3>
            </div>
           
        </div>
    </div>
    <motion.div className='myphoto'variants={fadin}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}>
     <div className='myphoto1'>
     <h1>MY PORTFOLIO</h1>
      <h5>inspiring selection</h5>
     </div>
    </motion.div>
    <div className='mysitesss'>
           <div className='mysite'>
              <div className='mysite1'>
                <div className='mysite2'>
                  <div className='slide'>
                  <div className='slide1'>
                      <img src={Myimage8} alt="" />
                      <img src={Myimage9} alt="" />
                      <img src={Myimage10} alt="" />
                      <img src={Myimage11} alt="" />
                      <img src={Myimage12} alt="" />
                      <img src={Myimage13} alt="" />
                      <img src={Myimage10} alt="" />
                      <img src={Myimage11} alt="" />
              
                    </div>
                    <div className='protitle'>
                      <h1><GoDotFill className='icon' />Bostami</h1>
                      <h3><GoDotFill className='icon' />Portfolio</h3>
                    </div>
                    <a href="https://saravanan-bostami-portfolio.netlify.app/">
                    <button><h6>GOTO VIEW</h6></button>
                    </a>
                  </div>
                </div>
                <div className='mysite2'>
                  <div className='slide'>
                  <div className='slide1'>
                      <img src={Myimage14} alt="" />
                      <img src={Myimage15} alt="" />
                      <img src={Myimage16} alt="" />
                      <img src={Myimage17} alt="" />
                      <img src={Myimage18} alt="" />
                      <img src={Myimage19} alt="" />
                      <img src={Myimage16} alt="" />
                      <img src={Myimage17} alt="" />
                    </div>
                    <div className='protitle'>
                      <h1><GoDotFill className='icon' />Cavani</h1>
                      <h3><GoDotFill className='icon' />Portfolio</h3>
                    </div>
                    <a href="https://saravanan-cavani-portfolio.netlify.app/">
                    <button><h6>GOTO VIEW</h6></button>

                    </a>
                  </div>
                </div>
                <div className='mysite2'>
                  <div className='slide'>
                  <div className='slide1'>
                      <img src={Myimage20} alt="" />
                      <img src={Myimage21} alt="" />
                      <img src={Myimage22} alt="" />
                      <img src={Myimage23} alt="" />
                      <img src={Myimage24} alt="" />
                      <img src={Myimage20} alt="" />
                      <img src={Myimage21} alt="" />
                      <img src={Myimage22} alt="" />
                    </div>
                    <div className='protitle'>
                      <h1><GoDotFill className='icon' />Jhon Dorpy</h1>
                      <h3><GoDotFill className='icon' />Portfolio</h3>
                    </div>
                    <a href="https://saravanan-portfolio3.netlify.app/">
                    <button><h6>GOTO VIEW</h6></button>

                    </a>
                  </div>
                </div>
                <div className='mysite2'>
                  <div className='slide'>
                  <div className='slide1'>
                      <img src={Myimage25} alt="" />
                      <img src={Myimage26} alt="" />
                      <img src={Myimage27} alt="" />
                      <img src={Myimage28} alt="" />
                      <img src={Myimage29} alt="" />
                      <img src={Myimage25} alt="" />
                      <img src={Myimage26} alt="" />
                      <img src={Myimage27} alt="" />
                    </div>
                    <div className='protitle'>
                      <h1><GoDotFill className='icon' />Flone</h1>
                      <h3><GoDotFill className='icon' />Ecommerce</h3>
                    </div>
<a href="https://saravanan-flone-ecommerce.netlify.app/"> <button><h6>GOTO VIEW</h6></button></a>
                  </div>
                </div>
                <div className='mysite2'>
                  <div className='slide'>
                  <div className='slide1'>
                      <img src={Myimage30} alt="" />
                      <img src={Myimage31} alt="" />
                      <img src={Myimage32} alt="" />
                      <img src={Myimage33} alt="" />
                      <img src={Myimage34} alt="" />
                      <img src={Myimage32} alt="" />
                      <img src={Myimage31} alt="" />
                      <img src={Myimage33} alt="" />
                    </div>
                    <div className='protitle'>
                      <h1><GoDotFill className='icon' />Woodstock</h1>
                      <h3><GoDotFill className='icon' />Ecommerce</h3>
                    </div>
                    <a href="https://saravanan-wootstock-portfolio.netlify.app/"><button><h6>GOTO VIEW</h6></button></a>
                  </div>
                </div>
                <div className='mysite2'>
                  <div className='slide'>
                  <div className='slide1'>
                      <img src={Myimage35} alt="" />
                      <img src={Myimage36} alt="" />
                      <img src={Myimage37} alt="" />
                      <img src={Myimage38} alt="" />
                      <img src={Myimage39} alt="" />
                      <img src={Myimage35} alt="" />
                      <img src={Myimage36} alt="" />
                      <img src={Myimage37} alt="" />
                    </div>
                    <div className='protitle'>
                      <h1><GoDotFill className='icon' />Vetri</h1>
                      <h3><GoDotFill className='icon' />Ecommerce</h3>
                    </div>
                    <a href="https://vetrivel.vercel.app/">
                    <button><h6>GOTO VIEW</h6></button>

                    </a>
                  </div>
                </div>
                <div className='mysite2'>
                  <div className='slide'>
                  <div className='slide1'>
                      <img src={Myimage40} alt="" />
                      <img src={Myimage41} alt="" />
                      <img src={Myimage42} alt="" />
                      <img src={Myimage43} alt="" />
                      <img src={Myimage44} alt="" />
                      <img src={Myimage42} alt="" />
                      <img src={Myimage41} alt="" />
                      <img src={Myimage42} alt="" />
                    </div>
                    <div className='protitle'>
                      <h1><GoDotFill className='icon' />Job Form validation</h1>
                      <h3><GoDotFill className='icon' />Ecommerce</h3>
                    </div>
                    <a href="https://jopportal.vercel.app/">
                    <button><h6>GOTO VIEW</h6></button>

                    </a>
                  </div>
                </div>
                <div className='mysite2'>
                  <div className='slide'>
                  <div className='slide1'>
                      <img src={Myimage45} alt="" />
                      <img src={Myimage46} alt="" />
                      <img src={Myimage47} alt="" />
                      <img src={Myimage45} alt="" />
                      <img src={Myimage46} alt="" />
                      <img src={Myimage47} alt="" />
                      <img src={Myimage45} alt="" />
                      <img src={Myimage46} alt="" />
                    </div>
                    <div className='protitle'>
                      <h1><GoDotFill className='icon' />Filter Method</h1>
                      <h3><GoDotFill className='icon' />Ecommerce</h3>
                    </div>
                    <a href="https://addtocart-one.vercel.app/">
                    <button><h6>GOTO VIEW</h6></button>

                    </a>
                  </div>
                </div>
                <div className='mysite2'>
                  <div className='slide'>
                  <div className='slide1'>
                      <img src={Myimage48} alt="" />
                      <img src={Myimage49} alt="" />
                      <img src={Myimage50} alt="" />
                      <img src={Myimage51} alt="" />
                      <img src={Myimage52} alt="" />
                      <img src={Myimage53} alt="" />
                      <img src={Myimage48} alt="" />
                      <img src={Myimage49} alt="" />
                    </div>
                    <div className='protitle'>
                      <h1><GoDotFill className='icon' />Yellovae Crackers</h1>
                      <h3><GoDotFill className='icon' />Ecommerce</h3>
                    </div>
                    <a href="https://www.sivakasiyellovaecrackers.com/">
                    <button><h6>GOTO VIEW</h6></button>

                    </a>
                  </div>
                </div>
                <div className='mysite2'>
                  <div className='slide'>
                  <div className='slide1'>
                      <img src={Myimage54} alt="" />
                      <img src={Myimage55} alt="" />
                      <img src={Myimage56} alt="" />
                      <img src={Myimage57} alt="" />
                      <img src={Myimage54} alt="" />
                      <img src={Myimage55} alt="" />
                      <img src={Myimage56} alt="" />
                      <img src={Myimage57} alt="" />
                    </div>
                    <div className='protitle'>
                      <h1><GoDotFill className='icon' />Nammaoore Crackers</h1>
                      <h3><GoDotFill className='icon' />Ecommerce</h3>
                    </div>
                    <a href="https://www.nammaoorcrackersz.com/">
                    <button><h6>GOTO VIEW</h6></button>

                    </a>
                  </div>
                </div>
                <div className='mysite2'>
                  <div className='slide'>
                  <div className='slide1'>
                      <img src={Myimage58} alt="" />
                      <img src={Myimage59} alt="" />
                      <img src={Myimage60} alt="" />
                      <img src={Myimage58} alt="" />
                      <img src={Myimage62} alt="" />
                      <img src={Myimage63} alt="" />
                      <img src={Myimage58} alt="" />
                      <img src={Myimage59} alt="" />
                    </div>
                    <div className='protitle'>
                      <h1><GoDotFill className='icon' />Vimix</h1>
                      <h3><GoDotFill className='icon' />Ecommerce</h3>
                    </div>
                    <a href="https://www.vimix.app/">
                    <button><h6>GOTO VIEW</h6></button>

                    </a>
                  </div>
                </div>
               
              </div>
            </div>
           </div>
    </>
  )
}

export default MyProtfolio