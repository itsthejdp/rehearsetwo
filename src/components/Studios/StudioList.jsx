import React from 'react'

const studios = [
    "Bogchi Studios",
    "Meadowlark Productions",
    "Studio 23",
    "Redverb Studios",
    "Soundkitchen"
  ];
  
  const studyas = [{
    id: 0,
    name: "Bogchi Studios",
    city: "Quezon City"
  }, 
  {
    id: 1,
    name: "Meadowlark Productions",
    city: "Caloocan City"
  },
  {
    id: 2,
    name: "Soundkitchen Studios",
    city: "Quezon City"
  }]
  
  export default function StudioList() {
    const studioList = studios.map(studio => <li>{studio}</li>);
    return <ul>{studioList}</ul>
  }
  