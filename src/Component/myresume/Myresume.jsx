import React from 'react'
import "./myresume.css"
import { useRef } from 'react'
import re1 from "./myresume2022-images-1.jpg"
import re2 from "./myresume2022-images-2.jpg"
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
   <div className='resume2'>
   <img src={re3} alt="" />
   </div>
  </div>
          
        </div>
        <button onClick={handleprint}>print to pdf</button>
  
    </>
  )
}

export default Myresume