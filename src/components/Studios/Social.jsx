import React from 'react';
import Card from '../Card'




export default function Social() {
    const deezNuts = fetch('https://api.deezer.com/user/2529')
    .then((res) => res.json())
    .then((data) => console.log(data))
  return (
    <div>
        <Card>
            <h1>I am Social.</h1>
        </Card>
    </div>
  )
}
