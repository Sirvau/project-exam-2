import { create } from 'zustand';
import { loadFromStorage, saveToStorage, removeFromStorage } from '../local-storage';

export const useUserStore = create((set) => ({
  userProfile: loadFromStorage('userProfile') || null,
  accessToken: loadFromStorage('accessToken') || null,

  isAuthenticated: Boolean(loadFromStorage('accessToken')),

  setUserProfile: (profile) => {
    saveToStorage('userProfile', profile);
    set({ userProfile: profile, isAuthenticated: true });
  },

  setAccessToken: (token) => {
    saveToStorage('accessToken', token);
    set({ accessToken: token, isAuthenticated: true });
  },
  clearUser: () => {
    removeFromStorage('userProfile');
    removeFromStorage('accessToken');
    set({ userProfile: null, accessToken: null, isAuthenticated: false });
  }
}));

export default useUserStore;
