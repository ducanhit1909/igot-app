import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Workspace {
  name: string;
  company: string;
  team: number;
}

interface OnboardProperties {
  name: string;
  gender?: 'male' | 'female' | 'other';
  workspace: Workspace;
}

interface OnboardStore extends OnboardProperties {
  setOnboardState: (payload: Partial<OnboardProperties>) => void;
}

export const useOnboardStore = create(
  persist<OnboardStore>(
    (set) => ({
      name: '',
      gender: undefined,
      workspace: {
        name: '',
        company: '',
        team: 0,
      },
      setOnboardState: (payload) => set({ ...payload }),
    }),
    {
      name: 'onboard-store',
    }
  )
);
