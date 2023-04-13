import { Types } from "@aidenpwnz/types";

export const Paragraph: React.FC<Types.IParagraph> = (props) => {
  return (
    <p className="text-base text-blue-500 font-normal">{props.children}</p>
  );
};
