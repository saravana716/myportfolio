import React from 'react'
import axios from "axios"
import { useState } from 'react'
import { useEffect } from 'react'
const Axiosres = () => {
    const [datas, setdatas] = useState([])
    const baseUrl = "http://localhost:4000/images/";
    useEffect(() => {
      check()
    }, [])
    
    async function check(params) {
        try{
            let result=await axios.get("http://localhost:4000/project/viewall")
            console.log(result.data.data);
                setdatas(result.data.data)

        }
        catch(err){
            console.log(err);
            
        }
    }
    console.log(datas);
    
  return (
    <div>

       {datas.map(function (data) {
console.log(`${baseUrl}${data.projectimg}`);
        return( <div className=''>
          <h1>{data.projectimg}</h1>
            <img src="http://localhost:4000/images/download%20(3).png"
             onError={(e) => e.target.src = "https://via.placeholder.com/150"} 
            />
            <h1>{data.projectlink
            }</h1>
            <h1>{data.projectname}</h1>
            <h1></h1>
            <h1></h1>
        </div>)
       })}

    </div>
  )
}

export default Axiosres