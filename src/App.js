import {React} from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import Home from './pages';
import AboutUsSection from './components/aboutus'
import Calendar from './components/calendar'
import News from './components/news'
function App() {
  return (
    <Router>
        <Home />
        <AboutUsSection/>
        <Calendar />
        <News />
    </Router>
  )
}

export default App
