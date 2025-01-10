import React from "react";
import Hero from "./component/Hero";
import About from "./component/About";
import Navbar from "./component/Navbar";
import Features from "./component/Features";

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Features />
    </main>
  );
};

export default App;
