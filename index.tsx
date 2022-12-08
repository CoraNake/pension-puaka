import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';

import { Activites } from './pages/Activites';
import { ChambresEtBungalows } from './pages/ChambresEtBungalows';
import { Evenements } from './pages/Evenements';
import { Locations } from './pages/Locations';
import { Formules } from './pages/Formules';
import { Accueil } from './pages/Accueil';
import { Reservations } from './pages/Reservations';
import { Contact } from './pages/Contact';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
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

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
