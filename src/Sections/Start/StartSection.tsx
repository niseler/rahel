import { NavElementEnum } from '../../Navigation/NavElementEnum.tsx';
import { mainNavStore } from '../Nav/mainNavStore.ts';
import { SectionBody } from '../SectionBody.tsx';
import { Headline } from '../Common/Headline.tsx';
import { EmptyNav } from '../Nav/EmptyNav.tsx';
import { withErrorBoundary } from '../../components/withErrorBoundary';

const StartSectionComponent = () => {
  const mainNav = mainNavStore((state) => state.value);
  return (
    mainNav === NavElementEnum.Start && (
      <>
        <EmptyNav />
        <SectionBody>
          <Headline text={'Start'} />
          <p>
            Da ich nicht gut basteln kann habe ich mich entschlossen eine kleine Webseite für dich zu erstellen. Ich
            hoffe, sie gefällt dir.
          </p>
          <p>Oben in der Navigation gelangst du zu einzelnen Unterseiten.</p>
          <p>
            Du kannst dies als eine ganz besondere Geste betrachten, da mir künstlerisches Gestalten im Frontend immer
            schwerfällt und ich zusätzlich versuche die Seite für die Anzeige im Handy zu optimieren.&#x1F609;
          </p>
          <p>Aber für dich mache ich das sehr gern und hoffe dir eine kleine Freude machen zu können.</p>
          <p>Bitte beachte die Hinweise unter dem Menüpunkt Valentinstag</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>Update 17.Juli 2026</p>
          <p>Der Counter sagt wir sind jetzt seit 29 Monaten und 25 Tagen zusammen</p>
          <p>Und es ist so schön, dass immer noch die selben Schmetterlinge wie an Anfang in mir wohnen </p>
          <p>Sie machen sich bemerkbar wenn ich mich an dich kuschel, dich Küsse, mit dir telefoniere, ein Bild von dir ansehe, auf den
          Weg zu bin an dich denke und in noch so vielen anderen Sitiuationen.</p>
          <p>Du bist mein Schatz und ich LIEBE dich über alles auf der Welt</p>
        </SectionBody>
      </>
    )
  );
};

export const StartSection = withErrorBoundary(StartSectionComponent, {
  componentName: 'StartSection'
});
