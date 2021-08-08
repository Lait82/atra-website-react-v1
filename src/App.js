import {React} from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import Home from './pages';
import AboutUsSection from './components/aboutus'
import Calendar from './components/calendar'
function App() {
  return (
    <Router>
        <Home />
        {/* <AboutUsSection/> */}
        <Calendar />
    </Router>
  )
}

export default App
