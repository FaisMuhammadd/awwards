import React from "react";
import Hero from "./component/Hero";
import About from "./component/About";

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Hero />

      <About />
    </main>
  );
};

export default App;
