export const createUISlice = (set) => ({
  isMenuOpen: false,
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  closeMenu: () => set({ isMenuOpen: false }),
  openMenu: () => set({ isMenuOpen: true }),
  darkMode: false,
  setDarkMode: () => set({ darkMode: true }),
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
});