import {produce} from "immer";

export const createUserSlice = (set) => ({
  user: null,
  setUser: (user) => set(produce(state => { state.user = user})),
  setFirstName: (firstName) => set((state) => ({ user: { ...state.user, firstName } })),
  setLastName: (lastName) => set((state) => ({ user: { ...state.user, lastName } })),
  // setFriends: (address) => set((state) => ({ user: { ...state.user, address } })),
  logout: () => set({ user: null }),
});