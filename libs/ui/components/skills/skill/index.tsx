import { motion } from "framer-motion";

export const Skill: React.FC<{ src: string; name: string }> = props => {
  return (
    <motion.div
      initial={{
        scale: 1,
        opacity: 0.6
      }}
      whileHover={{ scale: 1.2, opacity: 1 }}
      whileTap={{ scale: 1.2, opacity: 1 }}
      className='relative h-fit w-fit hover:cursor-pointer hover:animate-wiggle-big'
    >
      <img
        className='w-16 h-16 lg:w-24 lg:h-24 rounded-full p-1 border border-solid border-black/30 bg-black/10 object-cover object-center'
        src={props.src}
        alt={props.name}
      />
      <div className='absolute hover:flex rounded-full bg-white border border-black opacity-0 hover:opacity-90 z-30 w-[90%] h-[90%] text-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-xs font-light flex hover:flex-row items-center justify-center'>
        {props.name}
      </div>
    </motion.div>
  );
};
