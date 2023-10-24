import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Courses from './components/Courses';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import Register from './components/Register';

function App() {
  return (<>
    <Router basename="/">
      <Navbar />
      <svg class="wave-top" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#0099ff" fill-opacity="1" d="M0,32L60,58.7C120,85,240,139,360,176C480,213,600,235,720,202.7C840,171,960,85,1080,74.7C1200,64,1320,128,1380,160L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
      </svg>
      <svg class="wave-bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#0099ff" fill-opacity="1" d="M0,32L40,37.3C80,43,160,53,240,53.3C320,53,400,43,480,85.3C560,128,640,224,720,229.3C800,235,880,149,960,122.7C1040,96,1120,128,1200,160C1280,192,1360,224,1400,240L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
      </svg>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </Router>
  </>
  );
}

export default App;
