import { type } from "@aidenpwnz/types";

export const p: React.FC<type.p> = (props) => {
  return (
    <p className="text-base text-blue-500 font-normal">{props.children}</p>
  );
};
