import { AboutDescription } from "./description";
import { AboutPicture } from "./picture";
import { AboutTitle } from "./title";

export const About: React.FC<{}> = (props) => {
  return (
    <div className="max-w-7xl h-screen mx-auto w-full flex flex-col text-center px-10 lg:px-20 lg:text-start lg:flex-row justify-evenly items-center lg:gap-32 relative">
      {/* Title */}
      <AboutTitle />
      {/* Picure */}
      <AboutPicture />
      {/* Description */}
      <AboutDescription />
    </div>
  );
};
