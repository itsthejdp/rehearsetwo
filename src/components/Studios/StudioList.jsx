import React from 'react'
import Card from '../Card';
import Studio from './Studio';

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
  
  export default function StudioList({name, children}) {
    const studioList = studyas.map(studio => <Studio name={studio.name} key={studio.id}>{studio}</Studio>);
    return (
      <div>
        <Card>
            {studioList}
        </Card>
      </div>
    )
  }
  