import React from 'react'
import { useState } from 'react'


export default function Studio({name, description, imgURL}) {
  const [descOpen, setDesc] = useState(false);
  function showDesc() {
      setDesc(!descOpen);
  }
  return (
    <div className="flex-row justify-center items-center">
        <h1 className="px-2 font-bold">{name}</h1>
        <img src={imgURL} alt="" className=""/>
        <button onClick={showDesc} className='bg-orange-400 rounded-lg px-3 m-2'> {descOpen ? "Hide" : "Show"} Info</button>
        <p className="px-3">{ descOpen ? description : ''}</p>
        <button className='bg-white rounded-lg px-3 m-2'>Book Now</button>
    </div>
  )
}

