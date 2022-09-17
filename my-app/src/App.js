import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { useState } from 'react';


function App() {
  const [mode,setMode]=useState('light')
  const modecolour=()=>{
    if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='#151B54';
  }
}
  
  return (
    <>
  <Router>
  <Navbar abouttexters="About" mode={mode} setMode={modecolour}/>
  <div className="container my-10">
        
    <Routes>
              <Route path='/About' element={<About/>}>

              </Route>
              <Route path='/' element={<TextForm/>}>
              </Route>
    </Routes>
          
  </div>
    

    </Router>
    </>
  );
}//
//  <Routes>
//            <Route path="/About">
//            <About/>
//            </Route>
//            <Route path="/">
//            <TextForm heading="Enter your text below!!"/>
//            </Route>
//          </Routes>

export default App;
