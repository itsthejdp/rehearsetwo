import React from 'react'
import Card from '../Card';
import Studio from './Studio';
import { useState } from 'react';
import './studioData'


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
    city: "Quezon City",
    imgURL: "https://www.ipr.edu/wp-content/uploads/2020/02/music-studio-768x432.jpg",
    description: "A very rugged, yet iconic studio among UP Diliman students located in the heart of its campus."
  }, 
  {
    id: 1,
    name: "Meadowlark Productions",
    city: "Caloocan City",
    imgURL: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "An amazing, innovative studio, run by a young professional autodidact."
  },
  {
    id: 2,
    name: "Soundkitchen Studios",
    city: "Quezon City",
    imgURL: "https://www.ipr.edu/wp-content/uploads/2020/02/music-studio-768x432.jpg",
    description: "A classic among Maginhawa residents, this one is attached to a famous college hangout spot."
  }]
  
  export default function StudioList({name, children}) {
    const studioList = studyas.map(studio => <Studio name={studio.name} imgURL={studio.imgURL} description={studio.description} key={studio.id}>{studio}</Studio>);
    return (
      <div>
        <Card>
            {studioList}
        </Card>
      </div>
    )
  }
  