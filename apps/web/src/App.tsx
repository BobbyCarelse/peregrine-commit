import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { AppLayout } from './layouts';
import { Experience, Explore, Hero, Resume } from './sections';

const SECTION_ID_BY_PATH: Record<string, string> = {
  '/': 'home',
  '/explore': 'explore',
  '/experience': 'experience',
  '/resume': 'resume',
};

export const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const sectionId = SECTION_ID_BY_PATH[pathname];
    document.getElementById(sectionId ?? '')?.scrollIntoView({ behavior: 'smooth' });
  }, [pathname]);

  return (
    <AppLayout>
      <Hero />
      <Explore />
      <Experience />
      <Resume />
    </AppLayout>
  );
};
