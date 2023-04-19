import { motion } from "framer-motion";

export const Skill: React.FC<{ src: string }> = props => {
  return (
    <motion.img
      initial={{
        scale: 1
      }}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 1.2 }}
      className='w-16 h-16 lg:w-24 lg:h-24 rounded-full p-1 border border-solid border-black/30 bg-black/10 object-cover object-center hover:cursor-pointer'
      src={props.src}
      alt={props.src}
    />
  );
};
