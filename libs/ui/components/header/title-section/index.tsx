import { motion } from "framer-motion";

export const TitleSection: React.FC = () => (
  <motion.div
    initial={{
      y: -500,
      opacity: 0,
      scale: 0.5,
    }}
    animate={{
      y: 0,
      opacity: 1,
      scale: 1,
    }}
    transition={{
      duration: 1.5,
    }}
    className="items-center"
  >
    <h1>Luca Pellegrino's Portfolio</h1>
  </motion.div>
);
