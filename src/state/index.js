import {create} from "zustand";
import {createUserSlice} from "./user";
import {createUISlice} from "./ui";

export const useStore = create((...a) => ({
  ...createUserSlice(...a),
  ...createUISlice(...a),
}));