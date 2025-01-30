import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Donate from './pages/Donate';
import Schedule from './pages/Schedule';
import Shiurim from './pages/Shiurim';
import Contact from './pages/Contact';

import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className='main'>
        <Navbar />
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
        <Footer />
      </div>
    </Router>
  );
}

export default App;
