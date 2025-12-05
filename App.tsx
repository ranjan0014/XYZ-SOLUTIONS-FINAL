import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Posters from './components/Posters';
import VideoSection from './components/VideoSection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

function App() {
  return (
    <div className="min-h-screen bg-xyz-black text-white overflow-hidden selection:bg-xyz-blue selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Posters />
        <VideoSection />
        <Testimonials />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}

export default App;