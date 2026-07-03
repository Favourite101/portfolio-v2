"use client";

import { useEffect, useState } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Leadership from "@/components/Leadership";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Terminal from "@/components/Terminal";

export default function Home() {
  const [terminalOpen, setTerminalOpen] = useState(false);

  // Keyboard shortcut: Ctrl/Cmd + K opens the terminal
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setTerminalOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <Nav onOpenTerminal={() => setTerminalOpen(true)} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Leadership />
        <Contact />
      </main>
      <Footer onOpenTerminal={() => setTerminalOpen(true)} />
      <Terminal open={terminalOpen} onClose={() => setTerminalOpen(false)} />
    </>
  );
}
