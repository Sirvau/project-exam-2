import { create } from 'zustand';

export const useAllVenuesStore = create((set) => ({
  venues: [],
  setVenues: (data) => set({ venues: data })
}));
