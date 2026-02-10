import React, { useEffect, useState } from 'react';
import { Navbar, Hero, About, Skills, Projects, Contact, Footer } from './components';

const App = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-900 text-white overflow-hidden">
      {/* Custom Cursor Follower */}
      <div
        className="fixed opacity-30 w-8 h-8 bg-purple-500 rounded-full blur-xl pointer-events-none transition-transform duration-100 ease-out z-50 transform -translate-x-1/2 -translate-y-1/2"
        style={{ left: mousePosition.x, top: mousePosition.y }}
      />

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;