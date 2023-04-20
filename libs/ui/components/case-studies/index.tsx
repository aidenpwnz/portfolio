import { motion } from "framer-motion";
import { CaseStudiesTitle } from "./title";
import { Projects } from "./projects";

export const CaseStudies: React.FC = props => {
  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
      className='max-w-7xl h-screen mx-auto w-full flex flex-col text-center px-10 lg:text-start justify-evenly py-10 items-center lg:gap-32 relative overflow-x-hidden'
    >
      <CaseStudiesTitle />
      <Projects />
    </motion.div>
  );
};
