import { useState, useEffect } from 'react';

export function useCustomPathname(): string {
  const [pathname, setPathname] = useState<string>('');

  useEffect(() => {
    // Set the initial pathname
    setPathname(window.location.pathname);

    // Update pathname on route change
    const handleRouteChange = () => {
      setPathname(window.location.pathname);
    };

    // Listen for route changes
    window.addEventListener('popstate', handleRouteChange);
    
    // For Next.js page router
    if (typeof window !== 'undefined' && window.next) {
      window.next.router.events.on('routeChangeComplete', handleRouteChange);
    }

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
      if (typeof window !== 'undefined' && window.next) {
        window.next.router.events.off('routeChangeComplete', handleRouteChange);
      }
    };
  }, []);

  return pathname;
}