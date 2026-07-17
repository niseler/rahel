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
        </SectionBody>
      </>
    )
  );
};

export const StartSection = withErrorBoundary(StartSectionComponent, {
  componentName: 'StartSection'
});
