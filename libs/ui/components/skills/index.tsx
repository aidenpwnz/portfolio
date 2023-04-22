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
  yarn_icon,
  git_icon
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
        <Skill src={react_icon} name='React' />
        <Skill src={typescript_icon} name='TypeScript' />
        <Skill src={tailwind_icon} name='TailwindCSS' />
        <Skill src={javascript_icon} name='JavaScript' />
        <Skill src={html_icon} name='HTML' />
        <Skill src={css_icon} name='CSS' />
        <Skill src={flutter_icon} name='Flutter' />
        <Skill src={dart_icon} name='Dart' />
        <Skill src={redux_icon} name='Redux' />
        <Skill src={vscode_icon} name='VSCode' />
        <Skill src={yarn_icon} name='Yarn' />
        <Skill src={git_icon} name='GIT' />
      </div>
    </motion.div>
  );
};
