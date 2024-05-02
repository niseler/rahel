import {create} from "zustand";
import {LyricNavEnum} from "../../Interfaces.tsx";

type ActiveNav = {
    value: string;
}

export const useLyricsNavStore = create<ActiveNav>()(() => ({
    value: LyricNavEnum.First
}));

export const setLyricsNav = (data: ActiveNav) => {
    setState(data);
}

/* STORE UTILITIES */
export const setState = useLyricsNavStore.setState;
