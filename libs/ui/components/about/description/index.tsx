import { motion } from "framer-motion";

export const AboutDescription: React.FC = (props) => {
  return (
    <span className="flex flex-col gap-5 lg:justify-around lg:h-96 lg:gap-0">
      <motion.h4
        initial={{
          y: 200,
          opacity: 0,
        }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
        }}
        viewport={{ once: true }}
        className="tracking-[10px] text-base lg:text-2xl uppercase"
      >
        Here's my story
      </motion.h4>
      <motion.p
        initial={{
          x: 200,
          opacity: 0,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1,
        }}
        viewport={{ once: true }}
        className="text-blue-haze leading-7 lg:leading-8 text-xs lg:text-base"
      >
        Hi, I'm Luca. I'm a frontend developer from Italy deeply in love with
        the latest tech and, obviously, coding. I started my journey in the tech
        world when I was a kid and later discovered my love for coding.
      </motion.p>
    </span>
  );
};
