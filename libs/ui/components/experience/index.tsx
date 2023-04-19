import { CardSlider } from "./card-slider";
import { ExperienceTitle } from "./title";

export const Experience: React.FC = () => {
  return (
    <div className='max-w-7xl h-screen mx-auto w-full flex flex-col text-center px-10 lg:text-start justify-end py-10 items-center lg:gap-32 relative overflow-x-hidden'>
      <ExperienceTitle />
      <CardSlider />
    </div>
  );
};
