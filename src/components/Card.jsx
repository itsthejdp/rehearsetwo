import React from 'react'

export default function Card({children}) {
  return (
    <div className="bg-sky-500 flex flex-col p-8 m-12 text-center rounded-2xl justify-center items-center">
        {children}
    </div>
  )
}
