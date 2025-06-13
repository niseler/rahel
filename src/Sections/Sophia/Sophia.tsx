import { SectionBody } from '../SectionBody';
import { EmptyNav } from '../Nav/EmptyNav.tsx';
import { Headline } from '../Common/Headline.tsx';
import { Intro } from '../Common/Intro.tsx';
import { mainNavStore } from '../Nav/mainNavStore.ts';
import { NavElementEnum } from '../../Navigation/NavElementEnum.tsx';

export const Sophia = () => {
  const mainNav = mainNavStore((state) => state.value);
  return (
    mainNav === NavElementEnum.Sophia && (
    <>
      <EmptyNav />
      <SectionBody>
        <Headline text={'Sophia'} />
        <Intro>
          <p>
            Nachdem mir zu Ohren gekommen ist, dass Sophia sich nicht oft genug hier erwähnt fühlt, bekommt sie jetzt eine eigene Rubrik.
            Ich nenne diese liebevoll "Sophias Welt"
          </p>

        </Intro>
          <p>du lustiger, lebensfroher Mensch,</p>
          <p>der du unter unserem Knutschen leidest,</p>
          <p>die sich gern mit ihrem Bruder gegen uns verbündet</p>
          <p>und das Geräusch von elektronischen Feuerzeugen verabscheust,</p>
          <p>möge dich diese Seite mit Frohsinn erhellen</p>
          <p>auf das du uns weiterhin mit deinen Showeinlagen erheiterst,</p>
          <p>und wir noch viele schöne Momente zusammen verbringen.</p>

      </SectionBody>
    </>
  ));
};
