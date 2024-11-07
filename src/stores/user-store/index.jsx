import * as zustand from 'zustand';

export const useUserStore = zustand.create((set) => ({
  userData: null,
  setUserData: (data) => {
    localStorage.setItem('User profile:', JSON.stringify(data));
    set({ userData: data });
  },
  removeUserData: () => {
    localStorage.removeItem('User profile:');
    set({ userData: null });
  },
  loadUserData: () => {
    const data = JSON.parse(localStorage.getItem('User profile:'));
    if (data) set({ userData: data });
  }
}));

export default useUserStore;
