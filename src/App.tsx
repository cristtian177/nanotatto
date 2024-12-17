import React from 'react';
import Header from './components/Header';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Features />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;