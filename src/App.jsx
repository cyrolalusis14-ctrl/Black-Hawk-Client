import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experiences from './components/Experiences';
import Initiation from './components/Initiation';
import Masterclasses from './components/Masterclasses';
import SecretFiles from './components/SecretFiles';
import Application from './components/Application';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black text-white selection:bg-accent-gold selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Experiences />
        <Initiation />
        <Masterclasses />
        <SecretFiles />
        <Application />
      </main>
      <Footer />
    </div>
  );
}

export default App;
