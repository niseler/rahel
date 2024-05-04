import { MonthNavEnum } from '../../Interfaces.tsx';
import { NavElementEnum } from '../../Navigation/NavElementEnum.tsx';
import januar from './input/januar.json';
import februar from './input/february.json';
import march from './input/march.json';
import april from './input/april.json';
import may from './input/may.json';
import { Month, MonthProps } from './Month.tsx';
import { Get2KSubNav } from '../Nav/Get2KSubNav.tsx';
import { mainNavStore } from '../Nav/mainNavStore.ts';
import { SectionBody } from '../SectionBody.tsx';
import { Headline } from '../Common/Headline.tsx';

januar.monthId = MonthNavEnum.January;
februar.monthId = MonthNavEnum.February;
march.monthId = MonthNavEnum.March;
april.monthId = MonthNavEnum.April;
may.monthId = MonthNavEnum.May;

export const GetToKnowSection = () => {
  const mainNav = mainNavStore((state) => state.value);
  return (
    mainNav === NavElementEnum.Kennenlernen && (
      <>
        <Get2KSubNav />
        <SectionBody>
          <Headline text={'Kennenlernen'} />
          <Month monthProps={januar as MonthProps} />
          <Month monthProps={februar as MonthProps} />
          <Month monthProps={march as MonthProps} />
          <Month monthProps={april as MonthProps} />
          <Month monthProps={may as MonthProps} />
        </SectionBody>
      </>
    )
  );
};
