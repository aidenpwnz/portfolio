import { type } from "@aidenpwnz/types";

export const h1: React.FC<type.h1> = (props) => (
  <h1 className="text-lg text-red-500 font-bold">{props.children}</h1>
);
