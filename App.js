import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Counter from './components/Counter'; // Zaimportowanie komponentu Counter
import ImageSlider from './components/ImageSlider'; // Zaimportowanie komponentu ImageSlider

function App() {
  const [activeTab, setActiveTab] = useState('home'); // Stan dla aktywnej zakładki

  // Funkcja do zmiany aktywnej zakładki
  const switchTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="App">
      {/* Tło na całą stronę */}
      <div className="background"></div>

      <div className="content-wrapper">
        <Header />
        <div className="tabs">
          <button onClick={() => switchTab('home')} className={activeTab === 'home' ? 'active' : ''}>
            Strona Główna
          </button>
          <button onClick={() => switchTab('counter')} className={activeTab === 'counter' ? 'active' : ''}>
            Licznik
          </button>
          <button onClick={() => switchTab('gallery')} className={activeTab === 'gallery' ? 'active' : ''}>
            Galeria
          </button>
        </div>

        <div className="content">
          {activeTab === 'home' && <p>Witaj na stronie głównej!</p>}
          {activeTab === 'counter' && <Counter />}
          {activeTab === 'gallery' && <ImageSlider />}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
