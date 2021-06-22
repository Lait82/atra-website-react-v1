import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import Home from './pages';
import AboutUsSection from './components/aboutus'
function App() {
  return (
    <Router>
        <Home />
        <AboutUsSection/>
    </Router>
  )
}

export default App
