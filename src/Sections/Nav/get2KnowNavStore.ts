import {create} from "zustand";
import {MonthNavEnum} from "../../Interfaces.tsx";

type ActiveMonthNav = {
    value: MonthNavEnum;
}

export const useGet2KnowNavStore = create<ActiveMonthNav>()(() => ({
    value: MonthNavEnum.January
}));

export const setMonthNav = (data: ActiveMonthNav) => {
    setState(data);
}


/* STORE UTILITIES */
export const setState = useGet2KnowNavStore.setState;
