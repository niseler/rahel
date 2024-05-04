import { create } from 'zustand';
import { NavElementEnum } from '../../Navigation/NavElementEnum.tsx';

type ActiveMainNav = {
  value: NavElementEnum;
};

export const mainNavStore = create<ActiveMainNav>()(() => ({
  value: NavElementEnum.Start
}));

export const setMainNav = (data: ActiveMainNav) => {
  setState(data);
};

/* STORE UTILITIES */
export const setState = mainNavStore.setState;
