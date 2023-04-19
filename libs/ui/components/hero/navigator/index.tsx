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
        duration: 3,
      }}
      className="absolute top-[80%] left-[50%] -translate-x-[50%] flex flex-row items-center justify-between lg:gap-sub z-[11] text-blue-haze sm:top-[65%]"
      style={{ translateX: "-50%" }}
    >
      <AboutButton />
      <ExperienceButton />
      <SkillsButton />
      <ContactsButton />
    </motion.nav>
  );
};
