import { motion } from "framer-motion";

export const ExperienceCard: React.FC<{
  icon: string;
  position: string;
  company: string;
  stack: string[];
  date: { start: string; end: string };
  description: string[];
}> = props => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[300px] sm:w-[300px] md:w-[400px] xl:w-[500px] snap-center shadow-2xl p-10 xl:opacity-40 xl:hover:opacity-100'>
      <motion.img
        initial={{
          y: -100,
          opacity: 0
        }}
        transition={{
          duration: 1.2
        }}
        whileInView={{
          opacity: 1,
          y: 0
        }}
        viewport={{ once: true }}
        className='w-24 h-24 sm:w-32 sm:h-32 rounded-full xl:w-[150px] xl:h-[150px] object-cover object-center'
        src={props.icon}
        alt={props.company}
      />

      <div className='px-0 md:px-10 flex flex-col gap-2 items-start'>
        <h4 className='text-xl font-light'>{props.position}</h4>
        <p className='text-base font-bold mt-1'>{props.company}</p>
        <div className='flex flex-row space-x-2 my-2'>
          {props.stack.map(item => (
            <img key={item} src={item} alt={item} className='h-10 w-10' />
          ))}
        </div>
        <p className='uppercase text-base font-semibold'>
          {props.date.start} - {props.date.end}
        </p>
        <ul className='list-disc text-sm text-start space-y-4'>
          {props.description.map(item => (
            <li key={item} className=''>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};
