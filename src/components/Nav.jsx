import React from 'react'
import { useState } from 'react'
import Search from './Studios/Search'

export default function Nav({toggleForm}) {
  return (
    <nav className="bg-blue-200 flex justify-between items-center">
      <div className='flex items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
          <path d="M8.25 4.5a3.75 3.75 0 117.5 0v8.25a3.75 3.75 0 11-7.5 0V4.5z" />
          <path d="M6 10.5a.75.75 0 01.75.75v1.5a5.25 5.25 0 1010.5 0v-1.5a.75.75 0 011.5 0v1.5a6.751 6.751 0 01-6 6.709v2.291h3a.75.75 0 010 1.5h-7.5a.75.75 0 010-1.5h3v-2.291a6.751 6.751 0 01-6-6.709v-1.5A.75.75 0 016 10.5z" />
        </svg>
        <h1 className="text-3xl">Rehearse MNL</h1>
      </div>
      <ul className='flex space-x-4'>
          <li>Home</li>
          <li>About</li>
          <li>Studios</li>
          <button className="bg-white rounded-lg px-3" onClick={toggleForm} >Add a Studio</button>
          <Search />
          <li className="pr-2">Donate</li>
          <li><a href="">Post a Band Listing</a></li>
      </ul>
    </nav>
  )
}
