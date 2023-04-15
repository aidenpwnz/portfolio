export interface IUIStore {
  readTestState(): number;
  setTestState(v: number): void;
}
