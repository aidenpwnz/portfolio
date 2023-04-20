import { motion } from "framer-motion";
import { EmailIcon } from "../social-icons";

export const EmailSection: React.FC = () => (
  <motion.div
    initial={{
      x: 500,
      opacity: 0,
      scale: 0.5
    }}
    animate={{
      x: 0,
      opacity: 1,
      scale: 1
    }}
    transition={{
      duration: 1.5,
      delay: 1
    }}
    onClick={() => (location.href = "#contact-me")}
    className='flex flex-row items-center justify-end cursor-pointer'
  >
    <EmailIcon />
    <p className='text-blue-haze hidden md:inline-flex'>Get in touch!</p>
  </motion.div>
);
