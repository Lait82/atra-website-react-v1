import React, {useState} from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar/index.js';

function Home() {
  const [isOpen, setIsOpen] = useState(false); // useState returns a 

  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  return (
    <Router>
      {/* <Sidebar isOpen={isOpen} toggle={toggle} /> */}
      <Navbar toggle={toggle}/>
    </Router>
  )
}

export default Home
