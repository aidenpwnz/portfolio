import { motion } from "framer-motion";

export const Circles: React.FC = () => {
  return (
    <motion.div
      initial={{
        opacity: 0.6,
        scale: 2.5,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 2.7,
      }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <div className="flex relative items-center justify-center">
        <div className="rounded-full bg-grad w-[302px] h-[302px] animate-breathing absolute md:w-[402px] md:h-[402px]">
          <div className="rounded-full bg-ebony-clay w-[300px] h-[300px] z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-[400px] md:h-[400px]" />
        </div>
      </div>
    </motion.div>
  );
};
