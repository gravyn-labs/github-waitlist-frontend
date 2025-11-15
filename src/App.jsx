import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import React , {useState, useEffect} from "react"
import HomePage from './component/HomePage';
import Pricing from './component/Pricing';
import Contact from './component/Contact';


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [pathname]); // The effect runs every time the pathname changes

  return null; // This component does not render anything
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </Router>
  );
}

export default App;
