import * as React from 'react';
import './style.css';
import Slider from './components/Slider';
import Navbar from './components/Navbar';

import { Activites } from './pages/Activites';
import { ChambresEtBungalows } from './pages/ChambresEtBungalows';
import { Evenements } from './pages/Evenements';
import { Locations } from './pages/Locations';
import { Formules } from './pages/Formules';
import { Accueil } from './pages/Accueil';
import { Reservations } from './pages/Reservations';
import { Contact } from './pages/Contact';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

export default function App() {
  const router = createBrowserRouter([
    { path: '/', element: <Accueil /> },

    { path: '/activites', element: <Activites /> },
    { path: '/chambresetbungalows', element: <ChambresEtBungalows /> },
    { path: '/locations', element: <Locations /> },
    { path: '/evenements', element: <Evenements /> },
    { path: '/formules', element: <Formules /> },
    { path: '/reservations', element: <Reservations /> },
    { path: '/contact', element: <Contact /> },
  ]);

  return (
    <React.Fragment>
      <Navbar />
      <RouterProvider router={router} />

      <footer>Je suis le footer</footer>
    </React.Fragment>
  );
}
