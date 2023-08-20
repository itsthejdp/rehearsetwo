import React from 'react';
import About from './components/About'
import Nav from './components/Nav'
import Form from './components/Form';
import StudioList from './components/Studios/StudioList'


export default function App() {
  return (
    <div>
      <Nav/>
      <About/>
      <Form/>
      <StudioList/>
    </div>
  )
}
