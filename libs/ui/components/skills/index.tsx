import { motion } from "framer-motion";
import { Skill } from "./skill";
import { SkillsTitle } from "./title";
import {
  dart_icon,
  flutter_icon,
  jquery_icon,
  react_icon,
  redux_icon,
  tailwind_icon,
  typescript_icon,
  css_icon,
  html_icon,
  javascript_icon,
  vscode_icon,
  yarn_icon
} from "@aidenpwnz/assets";

export const Skills: React.FC = props => {
  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
      className='max-w-7xl h-screen mx-auto w-full flex flex-col text-center px-10 lg:text-start justify-evenly lg:justify-evenly py-10 items-center lg:gap-32 relative overflow-x-hidden space-y-10'
    >
      <SkillsTitle />
      <div className='grid grid-cols-4 gap-5 lg:gap-10 select-none'>
        <Skill src={react_icon} />
        <Skill src={typescript_icon} />
        <Skill src={tailwind_icon} />
        <Skill src={javascript_icon} />
        <Skill src={html_icon} />
        <Skill src={css_icon} />
        <Skill src={flutter_icon} />
        <Skill src={dart_icon} />
        <Skill src={redux_icon} />
        <Skill src={vscode_icon} />
        <Skill src={yarn_icon} />
      </div>
    </motion.div>
  );
};
