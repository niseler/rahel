import { MonthNavEnum } from '../../Interfaces.tsx';
import { NavElementEnum } from '../../Navigation/NavElementEnum.tsx';
import januar from './input/januar.json';
import februar from './input/february.json';
import march from './input/march.json';
import april from './input/april.json';
import { Month, MonthProps } from './Month.tsx';
import { Get2KSubNav } from '../Nav/Get2KSubNav.tsx';
import { mainNavStore } from '../Nav/mainNavStore.ts';

januar.monthId = MonthNavEnum.January;
februar.monthId = MonthNavEnum.February;
march.monthId = MonthNavEnum.March;
april.monthId = MonthNavEnum.April;

export const GetToKnowSection = () => {
  const mainNav = mainNavStore((state) => state.value);
  return (
    mainNav === NavElementEnum.Kennenlernen && (
      <>
        <Get2KSubNav />
        <section className="justify-center items-center bg-fce4ec pl-5 min-h-screen max-w-screen-md pb-10 bg-pink-200">
          <Month monthProps={januar as MonthProps} />
          <Month monthProps={februar as MonthProps} />
          <Month monthProps={march as MonthProps} />
          <Month monthProps={april as MonthProps} />
        </section>
      </>
    )
  );
};
