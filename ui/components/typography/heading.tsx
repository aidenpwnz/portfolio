import { Types } from "@aidenpwnz/types";

export const Heading: React.FC<Types.IHeading> = (props) => (
  <h1 className="text-lg text-red-500 font-bold">{props.children}</h1>
);
