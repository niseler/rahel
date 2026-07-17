import { useRef, useState, useEffect } from "react";
import { setLyricsNav, useLyricsNavStore } from './lyricsNavStore.ts';
import { cn } from '../../tools/utils.ts';

const ScrollableNav = () => {
  const scrollContainerRef = useRef<HTMLInputElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const activeNav = useLyricsNavStore((state) => state.value);
  const [navItems, setNavItems] = useState<string[]>([]);

  useEffect(() => {
    const loadNavItems = async () => {
      const lyricModules = import.meta.glob('../Lyrics/input/*.json', { eager: true });
      const lyrics = Object.values(lyricModules) as { nav: string }[];
      const sortedNavItems = lyrics.map(lyric => lyric.nav).sort((a, b) => a.localeCompare(b));
      setNavItems(sortedNavItems);
    };
    loadNavItems();
  }, []);

  const updateScrollState = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
    }
  };

  const scroll = (direction: string) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -100 : 100;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    updateScrollState();
    const container = scrollContainerRef.current;

    if (container) {
      container.addEventListener("scroll", updateScrollState);
      window.addEventListener("resize", updateScrollState);
    }

    return () => {
      if (container) container.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  return (
    <div className="relative bg-gray-600">
      {/* Linker Pfeil */}
      <button
        className={`absolute left-0 top-0 bottom-0 z-10 bg-gray-800 text-white px-2 opacity-75 hover:opacity-100 ${
          canScrollLeft ? "" : "opacity-30 cursor-not-allowed hidden"
        }`}
        onClick={() => canScrollLeft && scroll("left")}
        disabled={!canScrollLeft}
      >
        &larr;
      </button>

      {/* Navigationsleiste */}
      <nav
        ref={scrollContainerRef}
        className="overflow-x-auto no-scrollbar whitespace-nowrap flex items-center scroll-smooth"
      >
        {navItems.map((element) => (
          <a
            key={element}
            onClick={(_e) => setLyricsNav({ value: element })}
            className={cn('no-underline p-1 mx-0.5 py-0.5 text-blue-500 inline-block', { 'text-green-500': activeNav === element })}
          >
            {element}
          </a>
        ))}
      </nav>

      {/* Rechter Pfeil */}
      <button
        className={`absolute right-0 top-0 bottom-0 z-10 bg-gray-800 text-white px-2 opacity-75 hover:opacity-100 ${
          canScrollRight ? "" : "opacity-30 cursor-not-allowed hidden"
        }`}
        onClick={() => canScrollRight && scroll("right")}
        disabled={!canScrollRight}
      >
        &rarr;
      </button>
    </div>
  );
};

export default ScrollableNav;