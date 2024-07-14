import {produce} from "immer";

export const createUserSlice = (set) => ({
  user: null,
  setUser: (user) => set((state) => produce(state, (draft) => {
    draft.user = user;
  })),
  setFirstName: (firstName) => set((state) => ({ user: { ...state.user, firstName } })),
  setLastName: (lastName) => set((state) => ({ user: { ...state.user, lastName } })),
  setFriends: (friends) => set(produce(state => {
      state.user.friends = friends
  })),
  logout: () => set({ user: null }),
});