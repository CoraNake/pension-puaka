import * as React from 'react';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Accueil from './pages/Accueil';

import Footer from './components/Footer';

import './style.css';

export default function App() {
  return (
    <div>
      <Navbar />
      <Slider />
      <Accueil />
      <Footer />
    </div>
  );
}
