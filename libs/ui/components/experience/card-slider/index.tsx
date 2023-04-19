import { ExperienceCard } from "./card";
import { antlia_icon, sensei_icon, anglia_icon } from "@aidenpwnz/assets";
import {
  dart_icon,
  firebase_icon,
  flutter_icon,
  jquery_icon,
  react_icon,
  redux_icon,
  tailwind_icon,
  typescript_icon,
  css_icon,
  html_icon,
  javascript_icon
} from "@aidenpwnz/assets";

export const CardSlider: React.FC = () => {
  return (
    <div className='flex flex-row justify-between w-full space-x-36 sm:space-x-8 overflow-x-scroll p-10 snap-x snap-mandatory'>
      <ExperienceCard
        icon={sensei_icon}
        position='Frontend Developer'
        company='Sensei srl - Milan, IT'
        date={{ start: "Jul 2022", end: "PRESENT" }}
        stack={[react_icon, typescript_icon, tailwind_icon, jquery_icon]}
        description={[
          "Education scoped project with React and TS, state management with Zustand, Tailwind CSS UI, PocketBase database and DDD architecture",
          "Integration of a Public Digital Identity System in IE with JQuery"
        ]}
      />
      <ExperienceCard
        icon={antlia_icon}
        position='Frontend Developer'
        company='Antlia srl - Milan, IT'
        date={{ start: "Jan 2020", end: "Jul 2022" }}
        stack={[
          react_icon,
          typescript_icon,
          redux_icon,
          flutter_icon,
          dart_icon
        ]}
        description={[
          "Cross platform, home automation scoped project for mobile devices developed in Dart with Flutter",
          "FinTech project for investmentments, loans and billing in React, Typescript and Redux"
        ]}
      />
      <ExperienceCard
        icon={anglia_icon}
        position='MSc Information and Technology'
        company='Anglia Ruskin University - Cambrigde, UK'
        date={{ start: "2019", end: "2020" }}
        stack={[javascript_icon, html_icon, css_icon]}
        description={[
          "Learned the basics of web development and project structure",
          "Learned to code in a team"
        ]}
      />
    </div>
  );
};
