import React from 'react'
import "./myresume.css"
import { useRef } from 'react'
import re1 from "./saravanapriyan-resume_page-0001.jpg"
import re2 from "./saravanapriyan-resume_page-0002.jpg"
import re3 from "./myresume2022-images-3.jpg"
import { useReactToPrint } from 'react-to-print'
import mylogoimg from "../MyProfile/1706350975544.png"
const Myresume = () => {
    const myref= useRef()
    const handleprint = useReactToPrint({
        content:()=>myref.current,
        documentTitle:"resumedata",
        onAfterPrint:()=>alert("print success")
    })

  return (
    <>
   
        <div className='resume10'ref={myref}>
  <div className='res12'>
  <div className='resume2'>
   <img src={re1} alt="" />
   </div>
   <div className='resume2'>
   <img src={re2} alt="" />
   </div>
  
  </div>
  <div className='btn'>
          <button><h6>Print</h6></button>
        </div>  
        </div>
       
  
    </>
  )
}

export default Myresume