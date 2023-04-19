import { motion } from "framer-motion";
import { AboutDescription } from "./description";
import { AboutPicture } from "./picture";
import { AboutTitle } from "./title";

export const About: React.FC<{}> = props => {
  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
      className='max-w-7xl h-screen mx-auto w-full flex flex-col text-center px-10 lg:px-20 lg:text-start lg:flex-row justify-evenly items-center lg:gap-32 relative'
    >
      {/* Title */}
      <AboutTitle />
      {/* Picure */}
      <AboutPicture />
      {/* Description */}
      <AboutDescription />
    </motion.div>
  );
};
