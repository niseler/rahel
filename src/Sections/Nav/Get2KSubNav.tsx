import { setMonthNav, useGet2KnowNavStore } from './get2KnowNavStore.ts';
import { cn } from '../../tools/utils.ts';
import { useEffect, useState } from 'react';

const monthOrder: Record<string, number> = {
  'Januar': 1,
  'Februar': 2,
  'März': 3,
  'April': 4,
  'Mai': 5,
  'Juni': 6,
  'Juli': 7,
  'August': 8,
  'September': 9,
  'Oktober': 10,
  'November': 11,
  'Dezember': 12
};

export const Get2KSubNav = () => {
  const activeNav = useGet2KnowNavStore((state) => state.value);
  const [navItems, setNavItems] = useState<{ monthId: string; monthLabel: string }[]>([]);

  useEffect(() => {
    const loadNavItems = async () => {
      const monthModules = import.meta.glob('../GetToKnow/input/*.json', { eager: true });
      const months = Object.values(monthModules) as { monthId: string; monthLabel: string }[];
      months.sort((a, b) => (monthOrder[a.monthLabel] || 0) - (monthOrder[b.monthLabel] || 0));
      setNavItems(months);
    };
    loadNavItems();
  }, []);

  return (
    <nav className="bg-gray-600">
      {navItems.map((element) => (
        <a
          key={element.monthId}
          onClick={(_e) => setMonthNav({ value: element.monthId })}
          className={cn('no-underline p-1 mx-0.5 py-0.5 text-white', { 'text-blue-500': activeNav === element.monthId })}
        >
          {element.monthLabel}
        </a>
      ))}
    </nav>
  );
};
