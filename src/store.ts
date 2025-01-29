import { create } from 'zustand';

type Language = 'en' | 'he';

type LanguageStore = {
  lang: Language;
  english: () => void;
  hebrew: () => void;
};

export const useLanguageStore = create<LanguageStore>((set) => ({
  lang: 'en',
  english: () => {
    set({ lang: 'en' });
  },
  hebrew: () => {
    set({ lang: 'he' });
  }
}));
