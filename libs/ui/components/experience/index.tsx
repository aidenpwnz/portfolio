import { motion } from "framer-motion";
import { CardSlider } from "./card-slider";
import { ExperienceTitle } from "./title";

export const Experience: React.FC = () => {
  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
      className='max-w-7xl h-screen min-h-screen mx-auto w-full flex flex-col text-center px-10 lg:text-start justify-evenly lg:justify-end py-10 items-center lg:gap-32 relative overflow-x-hidden'
    >
      <ExperienceTitle />
      <CardSlider />
    </motion.div>
  );
};
