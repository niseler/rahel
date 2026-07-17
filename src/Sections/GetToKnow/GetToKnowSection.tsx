import { NavElementEnum } from '../../Navigation/NavElementEnum.tsx';
import { mainNavStore } from '../Nav/mainNavStore.ts';
import { SectionBody } from '../SectionBody.tsx';
import { Headline } from '../Common/Headline.tsx';
import { Get2KSubNav } from '../Nav/Get2KSubNav.tsx';
import { withErrorBoundary } from '../../components';
import { Month } from './Month.tsx';

const GetToKnowSectionComponent = () => {
  const mainNav = mainNavStore((state) => state.value);
  return (
    mainNav === NavElementEnum.Kennenlernen && (
      <>
        <Get2KSubNav />
        <SectionBody>
          <Headline text={'Kennenlernen'} />
          <Month />
        </SectionBody>
      </>
    )
  );
};

export const GetToKnowSection = withErrorBoundary(GetToKnowSectionComponent, {
  componentName: 'GetToKnowSection'
});
