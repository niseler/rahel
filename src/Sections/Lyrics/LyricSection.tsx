import { LyricNavEnum } from '../../Interfaces.tsx';
import { NavElementEnum } from '../../Navigation/NavElementEnum.tsx';
import { First } from './First.tsx';
import { Bus } from './Bus.tsx';
import { Wait } from './Wait.tsx';
import { Pause } from './Pause.tsx';
import { Untenrum } from './Untenrum.tsx';
import { LyricsSubNav } from '../Nav/LyricsSubNav.tsx';
import { useLyricsNavStore } from '../Nav/lyricsNavStore.ts';
import { mainNavStore } from '../Nav/mainNavStore.ts';

export const LyricSection = () => {
  const activeNav = useLyricsNavStore((state) => state.value);
  const activeMainNav = mainNavStore((state) => state.value);
  return (
    activeMainNav === NavElementEnum.Lyrics && (
      <>
        <LyricsSubNav />
        <section className="justify-center items-center bg-fce4ec pl-5 min-h-screen max-w-screen-md pb-10 bg-pink-200">
          {activeNav === LyricNavEnum.First && <First />}
          {activeNav === LyricNavEnum.Bus && <Bus />}
          {activeNav === LyricNavEnum.Wait && <Wait />}
          {activeNav === LyricNavEnum.Pause && <Pause />}
          {activeNav === LyricNavEnum.Untenrum && <Untenrum />}
        </section>
      </>
    )
  );
};
