import { type } from "@aidenpwnz/types";

export const button: React.FC<type.button> = (props) => (
  <button
    className="text-button font-button shadow bg-slate-100 p-sm border rounded-sm"
    onClick={props.onClick}
  >
    {props.children}
  </button>
);
