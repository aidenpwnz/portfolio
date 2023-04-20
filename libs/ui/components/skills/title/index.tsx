import { motion } from "framer-motion";

export const SkillsTitle: React.FC = () => (
  <div className='absolute top-[10%] flex flex-col space-y-4 px-10 lg:space-y-8 w-full items-center justify-start'>
    <h3 className='text-xl text-blue-haze tracking-[20px] shadow uppercase'>
      Skills
    </h3>
    <h3 className='text-xs text-blue-haze tracking-[5px] shadow lg:absolute lg:top-[15%]'>
      ...there's still space to add more!
    </h3>
  </div>
);
