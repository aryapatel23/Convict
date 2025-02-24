import { useState } from 'react'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar.jsx";
import Contectus from './Pages/ContactUs/Contactus.jsx';
import './App.css'
import Aboutus from './Pages/AboutUs/Aboutus.jsx';
import Home from './Pages/Home/Home.jsx';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contactus' element={<Contectus />} />
          <Route path='/Aboutus' element={<Aboutus />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
