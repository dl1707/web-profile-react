import React from 'react'
import { useLocation } from 'react-router-dom'

export default function WorkPage() 
{
  const location=useLocation();
  const {name, image}=location.state||{};
  return (
    <div>
      <h1>{name}</h1>
      <div style={{display:'flex', justifyContent:'center'}}>
          <img src={image}alt="selected work item" style={{ height: 480, width:700}}/>
      </div>
      <div>
        <p>Description here...</p>
      </div>
    </div>
  )
}
