import { type } from "@aidenpwnz/types";

export const PageLayout: React.FC<type.LayoutProps> = (props) => (
  <div className="w-screen h-screen bg-ebony-clay text-white snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0">
    {props.children}
  </div>
);
