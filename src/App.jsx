import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/layout/RootLayout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true,        element: <Home />     },
      { path: 'about',      element: <About />    },
      { path: 'projects',   element: <Projects /> },
      { path: 'contact',    element: <Contact />  },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
