import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/index.tsx";
import Home from "./components/Home/index.tsx";
import Projects from "./components/Projects/index.tsx";
import Skills from "./components/Skills/index.tsx";
import Contact from "./components/Contact/index.tsx";
import About from "./components/About/index.tsx";
import { Experience } from "./components/Experience/Experience.tsx";
import { FaArrowUp } from "react-icons/fa";

function App() {
  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="App">
      {/* Uncomment this if you want to use a NavBar */}
      {/* <NavBar /> */}
      <Home />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      {/* "Up" button is now fixed in all sections */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          className="bg-slate-100 text-white main-color p-3 rounded-full hover:bg-slate-800"
          onClick={scrollToTop}
        >
          <FaArrowUp  />
        </button>
      </div>
    </div>
  );
}

export default App;
