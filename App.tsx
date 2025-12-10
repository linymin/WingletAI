import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Process from './components/Process';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenContact = () => {
    setIsModalOpen(true);
  };

  const handleCloseContact = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen relative font-sans">
      <Header onOpenContact={handleOpenContact} />
      
      <main>
        <Hero onOpenContact={handleOpenContact} />
        <Portfolio onOpenContact={handleOpenContact} />
        <About onOpenContact={handleOpenContact} />
        <Process onOpenContact={handleOpenContact} />
      </main>

      <Footer onOpenContact={handleOpenContact} />

      {/* Global Contact Modal */}
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={handleCloseContact} 
      />
    </div>
  );
};

export default App;