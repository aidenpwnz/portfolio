import { c } from "@aidenpwnz/components";
import { motion } from "framer-motion";

export const SocialSection: React.FC = () => (
  <motion.div
    initial={{
      x: -500,
      opacity: 0,
      scale: 0.5,
    }}
    animate={{
      x: 0,
      opacity: 1,
      scale: 1,
    }}
    transition={{
      duration: 1.5,
      delay: 1,
    }}
    className="flex flex-row items-center justify-start gap-sm"
  >
    <c.LinkedinIcon />
    <c.GithubIcon />
  </motion.div>
);
