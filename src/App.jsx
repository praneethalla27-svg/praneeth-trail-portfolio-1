import React, { useRef } from "react";
import Background from "./assets/components/Background";
import Navbar from "./assets/components/Navbar";
import { Routes, Route } from "react-router";
import Projects from "./Pages/Projects";
import Play from "./Pages/Play";
import Contract from "./Pages/Contract";
import Home from "./Pages/Home";
import SmoothScroll from "./assets/components/SmoothScroll";

const App = () => {
  return (
    <div className="min-h-screen w-full px-4 md:px-8 lg:px-16">
      <SmoothScroll />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/play" element={<Play />} />
        <Route path="/contract" element={<Contract />} />
      </Routes>
    </div>
  );
};

export default App;
