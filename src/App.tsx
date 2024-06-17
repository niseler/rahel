import { Header } from './Header.tsx';
import { EventSection } from './Sections/Events/EventSection.tsx';
import { GetToKnowSection } from './Sections/GetToKnow/GetToKnowSection.tsx';
import { LyricSection } from './Sections/Lyrics/LyricSection.tsx';
import { StartSection } from './Sections/Start/StartSection.tsx';
import { ScienceSection } from './Sections/Science/ScienceSection.tsx';
import { ValentineSection } from './Sections/Valentine/ValentineSection.tsx';

function App() {
  return (
    <>
      <Header />
      <StartSection />
      <LyricSection />
      <GetToKnowSection />
      <ScienceSection />
      <ValentineSection />
      <EventSection />
      {/*<Chat />*/}
    </>
  );
}

export default App;
