import { Intro } from '../Common/Intro.tsx';
import { Spacer } from '../Common/Spacer.tsx';
import { Headline } from '../Common/Headline.tsx';

export interface LyricsProps {
  nav: string;
  intro: string;
  verse: string[][];
}

export const Lyric = (props: { lp: LyricsProps }) => {
  const lp = props.lp;
  return (
    <>
      <Headline text={'Lyrics'} />
      <Intro>{lp.intro}</Intro>
      <div>
        {lp.verse.map((verse, index) => {
          return (
            <div key={index} className="text-gray-800 font-indie text-3xl max-w-screen-md">
              {verse.map((line, index) => {
                return <p key={index}>{line}</p>;
              })}
              <Spacer />
            </div>
          );
        })}
      </div>
    </>
  );
};
