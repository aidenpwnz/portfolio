import { useHookstate } from "@hookstate/core";

export const useAtom = <T>(initialValue: T) => {
  const atom = useHookstate(initialValue);

  return atom;
};
