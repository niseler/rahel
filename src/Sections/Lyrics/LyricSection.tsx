import { NavElementEnum } from '../../Navigation/NavElementEnum.tsx';
import { LyricsSubNav } from '../Nav/LyricsSubNav.tsx';
import { useLyricsNavStore } from '../Nav/lyricsNavStore.ts';
import { mainNavStore } from '../Nav/mainNavStore.ts';
import { SectionBody } from '../SectionBody.tsx';
import Bus from './input/bus.json';
import First from './input/first.json';
import Pause from './input/pause.json';
import Wait from './input/wait.json';
import Untenrum from './input/untenrum.json';
import { Lyric, LyricsProps } from './Lyric.tsx';

export const LyricSection = () => {
  const activeNav = useLyricsNavStore((state) => state.value);
  const activeMainNav = mainNavStore((state) => state.value);
  const lyricPages: LyricsProps[] = [Bus, First, Untenrum, Pause, Wait];

  return (
    activeMainNav === NavElementEnum.Lyrics && (
      <>
        <LyricsSubNav />
        <SectionBody>
          {lyricPages.map((lyric) => activeNav.toString() == lyric.nav && <Lyric key={lyric.nav} lp={lyric} />)}
        </SectionBody>
      </>
    )
  );
};
