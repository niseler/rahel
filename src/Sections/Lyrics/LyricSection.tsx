import { NavElementEnum } from '../../Navigation/NavElementEnum.tsx';
import { useLyricsNavStore } from '../Nav/lyricsNavStore.ts';
import { mainNavStore } from '../Nav/mainNavStore.ts';
import { SectionBody } from '../SectionBody.tsx';
import { Lyric, LyricsProps } from './Lyric.tsx';
import ScrollableNav from '../Nav/ScrollableNav.tsx';
import { withErrorBoundary } from '../../components';
import { useEffect, useState } from 'react';

const LyricSectionComponent = () => {
  const activeNav = useLyricsNavStore((state) => state.value);
  const activeMainNav = mainNavStore((state) => state.value);
  const [lyricPages, setLyricPages] = useState<LyricsProps[]>([]);

  useEffect(() => {
    const loadLyrics = async () => {
      const lyricModules = import.meta.glob('./input/*.json', { eager: true });
      const lyrics = Object.values(lyricModules) as LyricsProps[];
      lyrics.sort((a, b) => a.nav.localeCompare(b.nav));
      setLyricPages(lyrics);
    };
    loadLyrics();
  }, []);

  const getActiveLyric = () => {
    return lyricPages.find(lyric => lyric.nav === activeNav);
  };

  return (
    activeMainNav === NavElementEnum.Lyrics && (
      <>
        <ScrollableNav />
        <SectionBody>
          {getActiveLyric() && <Lyric key={activeNav} lp={getActiveLyric()!} />}
        </SectionBody>
      </>
    )
  );
};

export const LyricSection = withErrorBoundary(LyricSectionComponent, {
  componentName: 'LyricSection'
});
