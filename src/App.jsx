import React from 'react';
import About from './components/About'
import Nav from './components/Nav'
import Hero from './components/Studios/Hero';
import Form from './components/Form';
import StudioList from './components/Studios/StudioList'
import { useState } from 'react';
import NewStudio from './components/Studios/NewStudio';
import Social from './components/Studios/Social';


export default function App() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  }

  const addStudioHandler = (studio) => {
    console.log('In App.js')
    console.log(studio);
  }


  return (
    <div>
      <Nav toggleForm={toggleFormVisibility}/>
      <NewStudio onAddStudio={addStudioHandler}/>
      <Hero/>
      <Form onSaveStudioData={addStudioHandler} isVisible={isFormVisible} />
      <Social/>
    </div>
  )
}
