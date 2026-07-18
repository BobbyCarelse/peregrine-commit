import { AppLayout } from './layouts';
import { Experience, Explore, Hero, Resume } from './sections';

export const App = () => {
  return (
    <AppLayout>
      <Hero />
      <Explore/>
      <Experience/>
      <Resume/>
    </AppLayout>
  );
};
