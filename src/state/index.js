import {create} from "zustand";
import {createUserSlice} from "./user";
import {createUISlice} from "./ui";

export const useGlobalStore = create((...a) => ({
  ...createUserSlice(...a),
  ...createUISlice(...a),
}));