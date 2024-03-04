import React from "react";
import { Navbar, Hero, About, Projects, Contact, Footer } from "./components";

const App = () => {
  return (
    <main className="bg-background overflow-x-hidden">
      <div className="2xl:max-w-[1440px] mx-auto w-full">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

export default App;
