import { create } from "zustand";

const isMemberOpen: any = create((set) => ({
  isOpen: false,
  toggleMemberOpen: () =>
    set((state: any) => ({ isOpen: !state.isOpen })),
}));

export default isMemberOpen;
