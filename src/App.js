import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
    <Router>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Resume' element={<Resume />} />
        <Route path='/Portfolio' element={<Portfolio />} />
        <Route path='/Certifications' element={<Certifications />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
