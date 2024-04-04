import React from 'react'
import {motion} from "framer-motion"
import { fadein } from '../Motion'
import Navbar from '../Navbar/Navbar'
import my7 from "../IMG_20240223_162336.jpg"
import sizeimg from "../html-5.png"
import sizeimg1 from "../css-3.png"
import sizeimg2 from "../js.png"
import sizeimg3 from "../library.png"
import sizeimg4 from "../nodejs.png"
import sizeimg5 from "../figma.png"
import { GoDotFill } from "react-icons/go";
import "./skils.css"
const Skills = () => {
  return (
    <>
    <Navbar />
    <div className='mywebsite'>
        <div className='mywebsite1'>
        <motion.div className='about2'variants={fadein("right",0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false,amount:0.7}}>
               <div className='myimages12345'variants={fadein("up",0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false,amount:0.7}}>
               <div className='aboutimg'>
                    <img src={my7} alt="" />
                </div>
                <h4>SKILLS</h4>
               </div>
               <h3 variants={fadein("up",0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false,amount:0.7}}><GoDotFill className='icon' />Skill Showcase</h3>
            </motion.div>
           
        </div>
    </div>
    <motion.div className='myskills'variants={fadein("up",0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false,amount:0.7}}>
        <div className='myskills1'>
    <h1>MY SKILLS</h1>
    <h5>I do all kinds of neat stuff</h5>
        </div>
    </motion.div>
    <div className='myskillset'>
      <div className='myskillset1'>
        <motion.div className='myskillset2'variants={fadein("right",0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false,amount:0.7}}>
          <button>HTML <p><span>01</span></p></button>
          <div className='boxsize'>
            <div className='boxsize1'>
              <img src={sizeimg} alt="" />
            </div>
          </div>
          <p>HTML serves as the foundation of web development, enabling the creation of structured and accessible content for websites.</p>
        </motion.div>
        <motion.div className='myskillset2'variants={fadein("left",0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false,amount:0.7}}>
          <button>CSS <p><span>02</span></p></button>
          <div className='boxsize'>
            <div className='boxsize1'>
              <img src={sizeimg1} alt="" />
            </div>
          </div>
          <p>
          CSS enhances the visual presentation of HTML elements, allowing web developers to style and design websites with precision and consistency, resulting in engaging user experiences.






          </p>
        </motion.div>
        <motion.div className='myskillset2'variants={fadein("right",0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false,amount:0.7}}>
          <button>JAVASCRIPT <p><span>03</span></p></button>
          <div className='boxsize'>
            <div className='boxsize1'>
              <img className='js' src={sizeimg2} alt="" />
            </div>
          </div>
<p>
JavaScript enables dynamic and interactive features on websites, such as form validation, animations, and real-time updates, enhancing user engagement and functionality.</p>        </motion.div>
        <motion.div className='myskillset2'variants={fadein("left",0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false,amount:0.7}}>
          <button>REACT JS<p><span>04</span></p></button>
          <div className='boxsize'>
            <div className='boxsize1'>
              <img className='js1' src={sizeimg3} alt="" />
            </div>
          </div>
          <p>ReactJS streamlines the creation of user interfaces by breaking them into reusable components, making web development more efficient and scalable.</p>
        </motion.div>
        <motion.div className='myskillset2'variants={fadein("right",0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false,amount:0.7}}>
          <button>NODE JS<p><span>05</span></p></button>
          <div className='boxsize'>
            <div className='boxsize1'>
              <img src={sizeimg4} alt="" />
            </div>
          </div>
          <p>
Node.js enables server-side JavaScript execution, facilitating the development of scalable and high-performance web applications with real-time capabilities.</p>
        </motion.div>
        <motion.div className='myskillset2' variants={fadein("left",0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false,amount:0.7}}>
          <button>FIGMA<p><span>06</span></p></button>
          <div className='boxsize'>
            <div className='boxsize1'>
              <img src={sizeimg5} alt="" />
            </div>
          </div>
          <p>Figma simplifies the design and collaboration process for web developers by providing a user-friendly interface for creating and sharing design mockups and prototypes.</p>
        </motion.div>
      </div>
    </div>
    </>
  )
}

export default Skills