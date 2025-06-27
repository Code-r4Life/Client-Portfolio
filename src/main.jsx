import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';  // Import these
import './index.css';
import App from './App.jsx';
import About from './pages/About.jsx'; // Import your About component
import Research from './pages/Research.jsx'; // Import your Research component
import Publications from './pages/Publications.jsx'; // Import your Publications component
import Teaching from './pages/Teaching.jsx'; // Import your Teaching component
import Patents from './pages/Patents.jsx'; // Import your Patents component
import Awards from './pages/Awards.jsx'; // Import your Awards component
import Editorial from './pages/Editorial.jsx'; // Import your Editorial component
import Contact from './pages/Contact.jsx' // Import your Contact component

// Define your routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,  // Home route
  },
  {
    path: "/about",
    element: <About />,  // About route
  },
  {
    path: "/research",
    element: <Research />,  // Research route
  },
  {
    path: "/publications",
    element: <Publications />,  // Publications route
  },
  {
    path: "/teaching",
    element: <Teaching />,  // Teaching route
  },
  {
    path: "/patents",
    element: <Patents />,  // Patents route
  },
  {
    path: "/awards",
    element: <Awards />,  // Awards route
  },
  {
    path: "/editorial",
    element: <Editorial />,  // Editorial route
  },
  {
    path: "/contact",
    element: <Contact />, // Contact route
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} /> 
  </StrictMode>,
);
