import { create } from "zustand";

type IntroState = "intro" | "question";
interface AppStoreType {
  state: IntroState;
  fails: number;
  win: boolean;
  incrementFails: () => void;
  setWin: (win: boolean) => void;
}

export const useAppStore = create<AppStoreType>((set) => ({
  state: "intro",
  fails: 0,
  win: false,
  incrementFails: () => set((state) => ({ fails: state.fails + 1 })),
  setWin: (win: boolean) => set(() => ({ win })),
}));
