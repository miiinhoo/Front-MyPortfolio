import { create } from "zustand";

export const useDropdownStore = create((set, get) => ({
  headerDropdownOpen: false,

  setHeaderDropdownOpen: (open) => set({ headerDropdownOpen: open }),
  toggleHeaderDropdown: () =>
    set({ headerDropdownOpen: !get().headerDropdownOpen }),
  closeHeaderDropdown: () => set({ headerDropdownOpen: false }),
}));

export const useAdminStore = create((set) => ({
    isAdmin: false,
    isToken:null,
    setIsAdminInfo: ({isAdmin,isToken}) => set({ isAdmin, isToken }),

}))