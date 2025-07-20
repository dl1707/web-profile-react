import React from 'react'
import { useLocation } from 'react-router-dom'

export default function WorkPage() 
{
  const location=useLocation();
  const {name, image}=location.state||{};
  const Folder='./Works/';

  return (
    <div style={{marginLeft:'50px'}}>
      <h1>{name}</h1>
      <ul style={{display:'flex',flexWrap:'wrap', justifyContent:'start', gap:'100px'}}>
      {image.map((item,index)=>
      (
        <div key={index}>
          <img src={Folder+item} alt={index} style={{border:'1px solid black',borderRadius:'32px',padding:0}} height="520" width="320"/>
        </div>
      ))}
      </ul>
      <div>
        <p>Description here...</p>
      </div>
    </div>
  )
}
