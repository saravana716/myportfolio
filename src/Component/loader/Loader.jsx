import React from 'react'
import "./Loader.css"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Loader = () => {
    const mynavigates=useNavigate()
    const [first, setfirst] = useState("Hi, I am Saravananpriyan")
    function gotohomepage(params) {
        if(first=="Please take a look at my portfolio."){
            mynavigates("/home")
        }
    }
    setTimeout(() => {
        setfirst("Please take a look at my portfolio.")
       
    },3000);
   
   

  return (
    <>
    <div className='loader'>
        <div className='loader1'>
          <div className='loader3'>
          <div className='ring'></div>
            <div className='ring'></div>
            <div className='ring'></div>
            <span>Loading ....</span>
          </div>
        <button onClick={gotohomepage}>{first}</button>

        </div>
    </div>
    </>
  )
}

export default Loader