import { LyricNavEnum } from '../../Interfaces.tsx';
import { setLyricsNav, useLyricsNavStore } from './lyricsNavStore.ts';
import { cn } from '../../tools/utils.ts';

export const LyricsSubNav = () => {
  const activeNav = useLyricsNavStore((state) => state.value);
  return (
    <nav className="bg-gray-600">
      {Object.values(LyricNavEnum).map((element) => {
        return (
          <a
            key={element}
            onClick={(_e) => setLyricsNav({ value: element })}
            className={cn(' no-underline p-1 mx-0.5 py-0.5  text-white', { 'text-green-500': activeNav === element })}
          >
            {element}
          </a>
        );
      })}
    </nav>
  );
};
