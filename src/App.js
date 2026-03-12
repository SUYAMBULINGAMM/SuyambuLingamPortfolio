<<<<<<< HEAD
import React, {useState, useEffect} from "react";
=======
import React, { useState, useEffect } from "react";
>>>>>>> be84a1da39d85297eef1ca658ff862c5d7f121e4
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
<<<<<<< HEAD
import Resume from "./components/Resume/ResumeNew"
=======
import Resume from "./components/Resume/ResumeNew";
>>>>>>> be84a1da39d85297eef1ca658ff862c5d7f121e4
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

<<<<<<< HEAD
function App(){
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer=setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return ()=>clearTimeout(timer);
=======
function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
>>>>>>> be84a1da39d85297eef1ca658ff862c5d7f121e4
  }, []);

  return (
    <Router>
      <Preloader load={load} />
<<<<<<< HEAD
      <div className="App" id={load ? "no-scroll" : "scroll"} style={{overflowX:"hidden"}}>
=======
      <div className="App" id={load ? "no-scroll" : "scroll"} style={{overflowX:'hidden'}}>
>>>>>>> be84a1da39d85297eef1ca658ff862c5d7f121e4
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
<<<<<<< HEAD
          <Route path="*" element={<Navigate />} />
=======
          <Route path="*" element={<Navigate to="/"/>} />
>>>>>>> be84a1da39d85297eef1ca658ff862c5d7f121e4
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
<<<<<<< HEAD
=======

>>>>>>> be84a1da39d85297eef1ca658ff862c5d7f121e4
export default App;