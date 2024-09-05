import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/home/Hero";
import Benefit from "../components/home/Benefit";
import About from "../components/home/About";
import Contact from "../components/home/Contact";
import Footer from "../components/home/Footer";
export default function home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Benefit />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
