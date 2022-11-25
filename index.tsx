import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import { Activites } from './pages/Activites';
import { ChambresEtBungalows } from './pages/ChambresEtBungalows';
import { Evenements } from './pages/Evenements';
import { Locations } from './pages/Locations';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const router = createBrowserRouter([
  { path: '/', element: <App /> },

  { path: '/', element: <Activites /> },
  { path: '/', element: <ChambresEtBungalows /> },
  { path: '/', element: <Locations /> },
  { path: '/', element: <Evenements /> },
]);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
