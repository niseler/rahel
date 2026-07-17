import { create } from 'zustand';

type ActiveMonthNav = {
  value: string;
};

const getInitialMonthValue = () => {
  const monthModules = import.meta.glob('../GetToKnow/input/*.json', { eager: true });
  const months = Object.values(monthModules) as { monthId: string }[];
  return months[0]?.monthId || '';
};

export const useGet2KnowNavStore = create<ActiveMonthNav>()(() => ({
  value: getInitialMonthValue()
}));

export const setMonthNav = (data: ActiveMonthNav) => {
  setState(data);
};

/* STORE UTILITIES */
export const setState = useGet2KnowNavStore.setState;
