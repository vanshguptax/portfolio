import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Achievements } from './components/Achievements';
import { Certifications } from './components/Certifications';
import { Projects } from './components/Projects';
import { Blogs } from './components/Blogs';
import { SocialMedia } from './components/SocialMedia';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Achievements />
        <Certifications />
        <Projects />
        <Blogs />
        <SocialMedia />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;