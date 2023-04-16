import { f } from "@aidenpwnz/fragments";
import { useAtom } from "@aidenpwnz/utils";

export const CounterButton: React.FC = (props) => {
  const count = useAtom(0);

  return (
    <f.button onClick={() => count.set((s) => s + 1)}>
      Count is {count.get()}
    </f.button>
  );
};
