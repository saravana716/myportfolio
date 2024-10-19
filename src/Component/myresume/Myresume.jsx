import React from 'react'
import "./myresume.css"
import { useRef } from 'react'
import re1 from "./new-resume2024_page-0001.jpg"
import re2 from "./new-resume2024_page-0002.jpg"
import re3 from "./myresume2022-images-3.jpg"
import { useReactToPrint } from 'react-to-print'
import mylogoimg from "../MyProfile/1706350975544.png"
import Navbar from '../Navbar/Navbar'
const Myresume = () => {
    const myref= useRef()
    const handleprint = useReactToPrint({
        content:()=>myref.current,
        documentTitle:"resumedata",
        onAfterPrint:()=>alert("print success")
    })

  return (
    <>
   <Navbar/>
        <div className='resume10'ref={myref}>
  <div className='res12'>
  <div className='resume2'>
   <img src={re1} alt="" />
   </div>
   <div className='resume2'>
   <img src={re2} alt="" />
   </div>
  
  </div>
  {/* <div className='btn'>
          <button on><h6>Print</h6></button>
        </div>   */}
        </div>
       
  
    </>
  )
}

export default Myresume