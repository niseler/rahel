import { GetToKnow } from './GetToKnow.tsx';
import { Get2KnowData } from '../../Interfaces.tsx';
import { useGet2KnowNavStore } from '../Nav/get2KnowNavStore.ts';
import { useEffect, useState } from 'react';

export type MonthProps = {
  getToKnowData: Get2KnowData[];
  monthLabel: string;
  monthId: string;
};

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

export const Month = () => {
  const activeNav = useGet2KnowNavStore((state) => state.value);
  const [monthData, setMonthData] = useState<MonthProps | null>(null);

  useEffect(() => {
    const loadMonthData = async () => {
      const monthModules = import.meta.glob('./input/*.json', { eager: true });
      const months = Object.values(monthModules) as MonthProps[];
      months.sort((a, b) => (monthOrder[a.monthLabel] || 0) - (monthOrder[b.monthLabel] || 0));
      const currentMonth = months.find(month => month.monthId === activeNav);
      setMonthData(currentMonth || null);
    };
    loadMonthData();
  }, [activeNav]);

  if (!monthData) return null;

  return (
    <>
      <h1 id={monthData.monthId} className="font-bold">
        {monthData.monthLabel}
      </h1>
      {monthData.getToKnowData.map((data, idx) => {
        return <GetToKnow key={idx} header={data.header} data={data.data} />;
      })}
    </>
  );
};
