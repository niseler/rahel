import { MonthNavEnum } from '../../Interfaces.tsx';
import { setMonthNav, useGet2KnowNavStore } from './get2KnowNavStore.ts';
import { cn } from '../../tools/utils.ts';

export const Get2KSubNav = () => {
  const activeNav = useGet2KnowNavStore((state) => state.value);
  return (
    <nav className="bg-gray-600">
      {Object.values(MonthNavEnum).map((element) => {
        return (
          <a
            key={element}
            onClick={(_e) => setMonthNav({ value: element })}
            className={cn('no-underline p-1 mx-0.5 py-0.5 text-white', { 'text-blue-500': activeNav === element })}
          >
            {element}
          </a>
        );
      })}
    </nav>
  );
};
