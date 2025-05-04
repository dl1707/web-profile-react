import React from 'react'
import { useLocation } from 'react-router-dom'

export default function WorkPage() 
{
  const location=useLocation();
  const {name, image}=location.state||{};
  const Folder='./Works/';

  return (
    <div>
      <h1>{name}</h1>
      <ul style={{display:'flex',flexWrap:'wrap', justifyContent:'space-around', gap:'20px'}}>
      {image.map((item,index)=>
      (
        <div key={index}>
          <img src={Folder+item[index%image.length]} alt={index} style={{border:'1px solid black',borderRadius:'32px',padding:0}} height="520" width="320"/>
        </div>
      ))}
      </ul>
      <div>
        <p>Description here...</p>
      </div>
    </div>
  )
}
