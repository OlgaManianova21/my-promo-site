import React from "react";
import "./index.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Details from "./components/Details/Details";
import Footer from "./components/Footer/Footer";
import Program from "./components/Program/Program";
import Speakers from "./components/Speakers/Speakers";




function App() {


  return (
    <>
      <Header />
      <Hero />
      <About />
      <Program />
      <Speakers />
      <Details />
      <Footer />

    </>
  );
}

export default App;
