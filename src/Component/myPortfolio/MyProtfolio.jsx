import React from 'react'
import {motion} from "framer-motion"
import { fadein } from '../Motion'
import Navbar from '../Navbar/Navbar'
import my7 from "../IMG_20240223_155412.jpg"
import Myimage8 from "../Screenshot 2024-02-24 190347.png"
import Myimage9 from "../Screenshot 2024-02-24 190320.png"
import Myimage10 from "../Screenshot 2024-02-24 190305.png"
import Myimage11 from "../Screenshot 2024-02-24 190249.png"
import Myimage12 from "../Screenshot 2024-02-24 190220.png"
import Myimage13 from "../Screenshot 2024-02-24 190158.png"
import Myimage14 from "../Screenshot 2024-02-24 191115.png"
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
import { GoDotFill } from "react-icons/go";

import "./MyPortfolio.css"
const MyProtfolio = () => {

  return (
    <>
    <Navbar />
    
    <div className='mywebsite'>
        <div className='mywebsite1'>
        <motion.div className='about2' variants={fadein("up",0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false,amount:0.7}}>
               <div className='myimages12345' variants={fadein("up",0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false,amount:0.7}}>
               <div className='aboutimg' >
                    <img src={my7} alt="" />
                </div>
                <h4>PORTFOLIO</h4>
               </div>
               <h3 variants={fadein("up",0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false,amount:0.7}}><GoDotFill className='icon' />inspiring selection</h3>
            </motion.div>
           
        </div>
    </div>
    <motion.div className='myphoto'variants={fadein("up",0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false,amount:0.7}}>
     <div className='myphoto1'variants={fadein("up",0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false,amount:0.7}}>
     <h1>MY PORTFOLIO</h1>
      <h5>inspiring selection</h5>
     </div>
    </motion.div>
    <div className='mysitesss'>
           <div className='mysite'>
              <div className='mysite1'>
                <motion.div className='mysite2'variants={fadein("left",0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false,amount:0.7}}>
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
                </motion.div>
                <motion.div className='mysite2' variants={fadein("left",0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false,amount:0.7}}>
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
                </motion.div>
                <motion.div className='mysite2'variants={fadein("left",0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false,amount:0.7}}>
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
                </motion.div>
                <motion.div className='mysite2'variants={fadein("right",0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false,amount:0.7}}>
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
                </motion.div>
                <motion.div className='mysite2' variants={fadein("right",0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false,amount:0.7}}>
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
                </motion.div>
                <motion.div className='mysite2'variants={fadein("right",0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false,amount:0.7}}>
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
                </motion.div>
                
              </div>
            </div>
           </div>
    </>
  )
}

export default MyProtfolio