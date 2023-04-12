import { produce } from "immer";
import { StoreSlice } from "../store-slice";
import { IUIStore } from "../types";

interface IState {
  test: boolean;
}

const initialState = (): IState => ({
  test: true,
});

export const UIStoreCreator: StoreSlice<IUIStore, IState> = (set, get) => ({
  readTestState() {
    return get().test;
  },

  setTestState(v) {
    return set(
      produce<IState>((s) => {
        s.test = v;
      })
    );
  },

  ...initialState,
});
