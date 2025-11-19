import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

function App() {
  return (
    <div className="min-h-screen bg-brand-black">
      <Header />
      <Hero />
      <div className="bg-brand-zinc-950">
        <Services />
      </div>
      <Portfolio />
      <div className="bg-brand-zinc-950">
        <About />
      </div>
      <Footer />
      <FloatingCTA />
    </div>
  );
}

export default App;
