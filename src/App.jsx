import React from "react";
import Hero from "./component/Hero";
import About from "./component/About";
import Navbar from "./component/Navbar";

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
    </main>
  );
};

export default App;
