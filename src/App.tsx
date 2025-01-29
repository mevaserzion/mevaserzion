import NavBar from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Donate from './pages/Donate';
import Schedule from './pages/Schedule';
import Shiurim from './pages/Shiurim';
import Contact from './pages/Contact';

import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className='main'>
      <NavBar />
      <Router>
        <div className='app'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/donate' element={<Donate />} />
            <Route path='/schedule' element={<Schedule />} />
            <Route path='/shiurim' element={<Shiurim />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
