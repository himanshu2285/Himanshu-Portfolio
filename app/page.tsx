"use client";

import NeuralBackground from "@/components/NeuralBackground";
import Navbar from "../components/Navbar";
import Hero from "../app/sections/Hero";
import About from "../app/sections/About";
import Skills from "../app/sections/Skills";
import Projects from "../app/sections/Projects";
import Research from "../app/sections/Research";
import Education from "../app/sections/Education";
import Certifications from "../app/sections/Certifications";
import Contact from "../app/sections/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <NeuralBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Research />
      <Education />
      <Certifications />
      <Contact />
    </main>
  );
}