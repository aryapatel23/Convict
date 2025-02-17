import { useState } from 'react'
import React from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Navbar from "./Components/Navbar.jsx";
import Contectus from './Pages/ContactUs/Contactus.jsx';
import './App.css' 



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
        <Route path='/contactus' element={<Contectus/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
