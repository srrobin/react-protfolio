import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Protfolio from './components/Protfolio';
import "./App.css"
import Navbar from './components/Navbar';
import {  AnimatePresence } from "framer-motion"
import ProjectExplor from './components/ProjectExplor';
import Experienced from './components/Experienced';

const App = () => {
  const location = useLocation();
  return (
    <main>
      <Navbar />
      <AnimatePresence  mode='wait'>
      <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/robin" element={<Protfolio  />}/>
          <Route path="/robin/demo-work" element={<ProjectExplor/>}/>
          <Route path="/robin/real-life-experience" element={<Experienced/>}/>
      </Routes>
      </AnimatePresence>
    </main>
  );
};

export default App;

