import { create } from "zustand";

interface AppStoreType {
  fails: number;
  win: boolean;
  incrementFails: () => void;
  setWin: (win: boolean) => void;
}

export const useAppStore = create<AppStoreType>((set) => ({
  fails: 0,
  win: false,
  incrementFails: () => set((state) => ({ fails: state.fails + 1 })),
  setWin: (win: boolean) => set(() => ({ win })),
}));
