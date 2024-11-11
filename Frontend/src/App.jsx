import React from 'react'
import Home from './components/Home';
import Signup from './components/Signup'
import Contact from './courses/contact';
import About from './courses/About';
import Courses from './courses/courses';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />

      </Routes>
</>
  )
}

export default App
