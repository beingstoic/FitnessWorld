import React from 'react'
import HeaderComponent from './HeaderComponent';
import About from './About';
import Homepage from './Homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './Contact';
export default function App() {
  return (
    <BrowserRouter>
    <div>
    <HeaderComponent />
    <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact-us" element={<Contact/>}/>
          <Route path="" element={<Homepage/> }/>
            
        </Routes>
    <div className="footer">
        <img src="/assets/bg.png" className="footer-logo" alt="" />
      </div>
    </div>
    </BrowserRouter>
  )
}
