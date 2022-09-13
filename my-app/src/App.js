// import logo from './logo.svg';
import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
    <>
    
  <Navbar abouttexters="About Texters"/>
  <div className="container my-10">
  <TextForm heading="Enter your text below!!" />
  </div>
    

    
    </>
  );
}

export default App;
