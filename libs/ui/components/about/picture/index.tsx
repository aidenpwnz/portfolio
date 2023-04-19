import { motion } from "framer-motion";
import { about_pic } from "@aidenpwnz/assets";

export const AboutPicture: React.FC = () => (
  <motion.img
    initial={{
      x: -200,
      opacity: 0
    }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{
      duration: 1
    }}
    viewport={{ once: true }}
    src={about_pic}
    alt='Luca Pellegrino About picture'
    className='w-32 md:w-44 lg:w-96 rounded-full object-cover lg:rounded-3xl aspect-auto'
  />
);
