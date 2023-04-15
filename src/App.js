import React from "react";
import {Routes, Route} from 'react-router-dom';
import Home from './Routes/home';
import About from './Routes/about';
import CropGenius from './Routes/cropGenius';

function App() {
  return (
  <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/about" element={<About/>}/>
     <Route path="/cropGenius" element={<CropGenius/>}/>
  </Routes>
  );
}

export default App;
