import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import PillNav from './PillNav';
import Footer from './Footer';
import Cursor from '../ui/Cursor';

export default function RootLayout() {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <>
      <Cursor />
      <PillNav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
