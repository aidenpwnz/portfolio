import type { StateCreator, StoreApi } from "zustand";

export type StoreSlice<T extends object, E extends object = T> = (
  set: StoreApi<E extends T ? E : E & T>["setState"],
  get: StoreApi<E extends T ? E : E & T>["getState"]
) => T;

export class StoreBuilder<T> {
  static summon() {
    return new StoreBuilder<unknown>(() => {
      return {};
    });
  }

  constructor(private readonly creator: StateCreator<T>) {}

  use<nT extends object, G extends object>(slice: StoreSlice<nT, G>) {
    return new StoreBuilder<T & nT>((set, get, api) => ({
      ...this.creator(set, get, api),
      ...(slice as unknown as StateCreator<nT>)(set, get, api),
    }));
  }

  toRootSlice() {
    return (
      set: StoreApi<T>["setState"],
      get: StoreApi<T>["getState"],
      api: StoreApi<T>
    ) => this.creator(set, get, api);
  }
}

export const store = () => StoreBuilder.summon();
