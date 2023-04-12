export interface IUIStore {
  readTestState(): boolean;
  setTestState(v: boolean): void;
}
