import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Faq from './Pages/Faq';
import Hosting from './Pages/Hosting';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Assurance from './Pages/Assurance';
import Terms from './Pages/Terms';
import GetTheApp from './Pages/GetTheApp';
import Search from './Pages/Search';
import ScrollToTop from './ScrollToTop'; // Import the ScrollToTop component

function App() {
  
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* Add ScrollToTop component inside BrowserRouter */}
      <Routes>
        <Route index element={<Home />} />
        <Route path="/hosting" element={<Hosting />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/assurance" element={<Assurance />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/dowloadlimitles" element={<GetTheApp />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
