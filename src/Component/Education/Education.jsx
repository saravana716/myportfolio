import React from 'react'
import "./Education.css"
import Navbar from '../Navbar/Navbar'
import my7 from "../IMG_20240223_162336.jpg"
import { GoDotFill } from "react-icons/go";
import { LuSchool } from "react-icons/lu";
import { BiSolidSchool } from "react-icons/bi";
import { MdOutlineSchool } from "react-icons/md";
import { SiSimilarweb } from "react-icons/si";

const Education = () => {
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
                <h4>EDUCATION</h4>
               </div>
               <h3><GoDotFill className='icon' />Learning Journey</h3>
            </div>
           
        </div>
    </div>
    <div className='educations'>
        <div className='educations1'>
        <h1>MY EDUCATION</h1>
    <h5>Knowledge Chronicle</h5>
        </div>
    </div>
    <div className='myedudata'>
        <div className='myedudata1'>
           
            <div className='myedudata2'>
                <div className='myedudata3'>
                    <div className='myedudata4'>
                        <div className='myedudata5'>
                        <MdOutlineSchool className='scicon'/>
                            
                        </div>
                    </div>
                    <div className='myedudata6'>
                    <button><h6>2019 - 2022</h6></button>
                        
                        <h2>Bachelor Degree in Information Technology</h2>
                        <h6>Sri Kaliswari College , Sivakasi</h6>
                    </div>
                </div>
                <div className='degree'>
                    <p>I completed my Bachelor's in Information Technology from Sri Kaliswari College, Sivakasi, under Kamaraj University, Madurai, achieving a 72% aggregate. During my time at Sri Kaliswari College, I actively participated in practical projects and extracurricular activities, enriching my educational experience and honing my skills beyond the classroom.




</p>
                </div>
                <div className='percentage'>
                    <div className='pline'>
                        <p></p>
                    </div>
                    <h2>72%</h2>
                </div>
            </div>
            <div className='myedudata2'>
                <div className='myedudata3'>
                    <div className='myedudata4'>
                        <div className='myedudata5'>
                        <BiSolidSchool className='scicon'/>
                            
                        </div>
                    </div>
                    <div className='myedudata6'>
                    <button><h6>2016 - 2017</h6></button>
                        
                        <h2>Higher Secondary Certificate</h2>
                        <h6>Hindu Thevamar Hig.Sec.School , Sivakasi</h6>
                    </div>
                </div>
                <div className='degree'>
                <p>I completed my higher secondary education at Hindu Thevamar High Secondary School, affiliated with the State Board, scoring 82%. Throughout my time there, I diligently pursued my studies, engaging in various extracurricular activities to complement my academic growth.</p>

                </div>
                <div className='percentage'>
                    <div className='pline1'>
                        <p></p>
                    </div>
                    <h2>84%</h2>
                </div>
            </div>
            <div className='myedudata2'>
                <div className='myedudata3'>
                    <div className='myedudata4'>
                        <div className='myedudata5'>
                        <LuSchool className='scicon'/>
                            
                        </div>
                    </div>
                    <div className='myedudata6'>
                    <button><h6>2014 - 2015</h6></button>
                        
                        <h2>Secondary School Leaving Certificate</h2>
                        <h6>Hindu Thevamar Hig.Sec.School , Sivakasi</h6>
                        
                    </div>
                </div>
                <div className='degree'>
                    <p>I completed my secondary education at Hindu Thevamar High Secondary School, affiliated with the State Board, scoring 84%. Throughout my time at Hindu Thevamar High Secondary School, I consistently demonstrated dedication to my studies, actively participating in various academic and extracurricular activities to enhance my overall learning experience.




</p>
                </div>
                <div className='percentage'>
                    <div className='pline1'>
                        <p></p>
                    </div>
                    <h2>84%</h2>
                </div>
            </div>
            <div className='myedudata2'>
                <div className='myedudata3'>
                    <div className='myedudata4'>
                        <div className='myedudata5'>
                        <SiSimilarweb className='scicon'/>
                            
                        </div>
                    </div>
                    <div className='myedudata6'>
                    <button><h6>2023 - 2024</h6></button>
                        
                        <h2>Full-Stack Course</h2>
                        <h6>Code purble Institute , Sivakasi</h6>
                    </div>
                </div>
                <div className='degree'>
                    <p>I completed a six-month full-stack course at Code Purple Academy, acquiring comprehensive skills in both front-end and back-end development. The hands-on approach and diverse curriculum equipped me with the expertise and confidence to tackle complex web development projects effectively.</p>
                    
                </div>
                <div className='percentage'>
                    <div className='pline2'>
                        <p>HTML</p>
                        <p>Css</p>
                        <p>Javascript</p>
                        <p>Reactjs</p>
                        <p>Nodejs</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Education