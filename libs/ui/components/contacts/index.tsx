import { motion } from "framer-motion";
import { ContactsTitle } from "./title";
import { ContactInfo } from "./info";
import { ContactForm } from "./form";

export const Contacts: React.FC = props => {
  const submit = () => {};
  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
      className='max-w-7xl h-screen mx-auto w-full flex flex-col text-center px-10 lg:text-start justify-end pt-36 items-center lg:gap-32 relative overflow-x-hidden min-h-screen overflow-y-visible'
    >
      <ContactsTitle />
      <div className='flex flex-col items-start justify-evenly space-y-1 h-full'>
        <ContactInfo />
        <p className='place-self-center'>- OR -</p>
        <ContactForm />
      </div>
    </motion.div>
  );
};
