import { create } from 'zustand';

type ActiveNav = {
  value: string;
};

const getInitialNavValue = () => {
  const lyricModules = import.meta.glob('../Lyrics/input/*.json', { eager: true });
  const lyrics = Object.values(lyricModules) as { nav: string }[];
  return lyrics[0]?.nav || '';
};

export const useLyricsNavStore = create<ActiveNav>()(() => ({
  value: getInitialNavValue()
}));

export const setLyricsNav = (data: ActiveNav) => {
  setState(data);
};

/* STORE UTILITIES */
export const setState = useLyricsNavStore.setState;
