import React, { useState, useEffect } from 'react';
import CurrentPortfolio from './versions/Current/CurrentPortfolio';
import SketchPortfolio from './versions/Sketch/SketchPortfolio';

export default function App() {
  // Determine route from pathname or hash (supports both /sketch and #/sketch for static hosting)
  const getInitialRoute = () => {
    const path = window.location.pathname.toLowerCase();
    const hash = window.location.hash.toLowerCase();
    if (path === '/sketch' || path.startsWith('/sketch') || hash === '#/sketch' || hash === '#sketch') {
      return '/sketch';
    }
    return '/';
  };

  const [currentRoute, setCurrentRoute] = useState(getInitialRoute);

  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (path === '/sketch' || path.startsWith('/sketch') || hash === '#/sketch' || hash === '#sketch') {
        setCurrentRoute('/sketch');
      } else {
        setCurrentRoute('/');
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigateTo = (path) => {
    window.history.pushState({}, '', path);
    setCurrentRoute(path);
    window.scrollTo(0, 0);
  };

  // Render Version 2 when on /sketch, otherwise render Version 1 (Frozen current portfolio)
  if (currentRoute === '/sketch') {
    return <SketchPortfolio onNavigate={navigateTo} />;
  }

  return <CurrentPortfolio onNavigate={navigateTo} />;
}
