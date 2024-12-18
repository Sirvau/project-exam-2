import { create } from 'zustand';

export const useModalStore = create((set) => ({
  modals: {},

  openModal: (id) =>
    set((state) => ({
      modals: { ...state.modals, [id]: true }
    })),

  closeModal: (id) =>
    set((state) => ({
      modals: { ...state.modals, [id]: false }
    })),

  toggleModal: (id) =>
    set((state) => ({
      modals: { ...state.modals, [id]: !state.modals[id] }
    })),

  isModalOpen: (id) => set((state) => state.modals[id] ?? false)
}));
