import { motion } from "framer-motion";

export const AboutDescription: React.FC = (props) => {
  return (
    <span className="space-y-7 lg:h-96">
      <motion.h4
        initial={{
          x: 200,
          opacity: 0,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1,
        }}
        viewport={{ once: true }}
        className="tracking-[10px] text-base font-semibold lg:text-2xl uppercase"
      >
        Here's my story
      </motion.h4>
      <motion.p
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1,
        }}
        viewport={{ once: true }}
        className="text-blue-haze leading-7 lg:leading-8 text-xs lg:text-base"
      >
        Hi, I'm Luca 👋
        <br />
        I'm a frontend developer from Italy obsessed with the latest tech and,
        obviously, coding. I started my journey in the tech world when I was a
        kid and later discovered my love for coding.
        <br />I have worked on both mobile and desktop applications for
        different purposes, ranging from FinTech and banking, to home
        smartification and education, and always strived to provide the best
        performance and responsiveness.
      </motion.p>
    </span>
  );
};
