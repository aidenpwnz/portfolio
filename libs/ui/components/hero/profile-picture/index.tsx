import { profilepic } from "@aidenpwnz/assets";
import { motion } from "framer-motion";

export const ProfilePicture: React.FC = () => (
  <div className="absolute top-[28%] left-1/2 -translate-x-1/2 flex flex-col items-center gap-12 z-[11]">
    <motion.h2
      initial={{
        y: -500,
        scale: 2.5,
      }}
      animate={{
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 3,
      }}
      className="text-[15px] text-blue-haze tracking-[15px] text-center shadow"
    >
      FRONTEND DEVELOPER
    </motion.h2>
    <motion.img
      initial={{
        y: -500,
        scale: 2.5,
      }}
      animate={{
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      src={profilepic}
      alt="Luca Pellegrino, developer"
      className="rounded-full h-32 w-32"
    />
  </div>
);
