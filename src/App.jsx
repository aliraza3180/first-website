import React from "react";
import { Navbar, Hero, About, Projects, Contact, Footer } from "./components";

const App = () => {
  return (
    <div className="bg-background">
      <div className="2xl:max-w-[1440px] mx-auto w-full">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
