import { useState } from 'react'
import React from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Navbar from "./Components/Navbar.jsx";

import './App.css' 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          
        </Routes>
      </Router>
    </>
  )
}

export default App
