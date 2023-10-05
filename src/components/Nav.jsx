import React from 'react'
import { useState } from 'react'
import Search from './Studios/Search'

export default function Nav({toggleForm}) {
  return (
    <nav className="bg-green-200 flex justify-between items-center">
      <div className='flex items-center'>
        <h1 className="text-3xl">Circularé</h1>
      </div>
      <ul className='flex space-x-4'>
          <li>Home</li>
          <li>About Circular</li>
          <li>Cataloge</li>
          <li>Return Your Product</li>
          <button className="bg-white rounded-lg px-3" onClick={toggleForm} >Log In</button>
          <button className="bg-white rounded-lg px-3" onClick={toggleForm} >Sign Up</button>
          <Search />
          <li className="pr-2">Donate to a Store Bitttch</li>
          <li><a href="">Post a Band Listing</a></li>
      </ul>
    </nav>
  )
}
