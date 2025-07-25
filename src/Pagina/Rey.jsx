import React from 'react'
import { useParams } from 'react-router-dom'
function Rey() {
    const url = "https://html6.es/img/rey_"
    const {reyes} = useParams()
  return (
    <div>

        <img src={`${url}${reyes}  `} alt='rey'/>
        <div></div>
    </div>
  )
}

export default Rey