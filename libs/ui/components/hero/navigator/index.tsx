import { motion } from "framer-motion";
import { AboutButton } from "./buttons/about";
import { ExperienceButton } from "./buttons/experience";
import { SkillsButton } from "./buttons/skills";
import { ContactsButton } from "./buttons/contacts";

export const Navigator: React.FC = () => {
  return (
    <motion.nav
      initial={{
        y: 500,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 1.5,
        delay: 2.5,
      }}
      className="absolute top-[60%] left-[50%] -translate-x-[50%] flex flex-row flex-wrap items-center justify-between gap-sub z-[11] text-comet"
      style={{ translateX: "-50%" }}
    >
      <AboutButton />
      <ExperienceButton />
      <SkillsButton />
      <ContactsButton />
    </motion.nav>
  );
};
