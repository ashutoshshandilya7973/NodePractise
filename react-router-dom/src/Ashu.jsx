import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Ashu = () => {
    const navigate=useNavigate()

    console.log("consfusion")
    navigate("/demo")
   
     
  return (
    <div>
       welcome to the confusion clear page
    </div>
  )
}

export default Ashu
