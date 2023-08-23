import React from 'react';
import About from './components/About'
import Nav from './components/Nav'
import Hero from './components/Studios/Hero';
import Form from './components/Form';
import StudioList from './components/Studios/StudioList'
import { useState } from 'react';


export default function App() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  }


  return (
    <div>
      <Nav toggleForm={toggleFormVisibility}/>
      <Hero/>
      <Form isVisible={isFormVisible} />
      <StudioList/>
    </div>
  )
}
