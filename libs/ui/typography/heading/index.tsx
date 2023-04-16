import { type } from "@aidenpwnz/types";

export const h1: React.FC<type.h1> = (props) => (
  <h1 className="text-h1 font-h1">{props.children}</h1>
);
