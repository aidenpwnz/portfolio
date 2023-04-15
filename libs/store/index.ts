import { StoreApi, create } from "zustand";
import { UIStoreCreator } from "./store.ui";
import { store } from "./store-slice";

export const useStore = create(store().use(UIStoreCreator).toRootSlice());
