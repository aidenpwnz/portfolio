import { motion } from "framer-motion";
import { useState } from "react";

export const ContactForm: React.FC = () => {
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [sent, setSent] = useState<boolean>(false);
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.location.href = `mailto:aidenpwnz@proton.me?subject=${subject}&body=${message}`;

    setSent(true);

    setTimeout(() => {
      setSubject("");
      setMessage("");
      setSent(false);
    }, 2000);
  };
  return (
    <form
      className='flex flex-col items-center justify-center space-y-4'
      onSubmit={e => submit(e)}
    >
      {/* <div className='flex flex-row items-center justify-center space-x-4'>
        <input
          className='rounded-xl p-2 text-black w-1/2'
          placeholder='Name'
          required
        />
        <input
          className='rounded-xl p-2 text-black w-1/2'
          placeholder='Surname'
        />
      </div> */}
      <input
        className='rounded-xl p-2 text-black w-[70vw]'
        value={subject}
        onChange={e => setSubject(e.target.value)}
        placeholder='Subject'
        required
      />
      <textarea
        className='rounded-xl p-2 text-black w-[70vw] h-44 max-h-44 md:h-60 md:max-h-60'
        value={message}
        onChange={e => setMessage(e.target.value)}
        placeholder='Message'
        required
      />
      <motion.button
        type='submit'
        className={`p-3 text-xs lg:text-base rounded-full bg-red-500 w-1/2 ${
          sent ? "animate-wiggle-big bg-green-500 w-1/4 lg:w-1/12" : ""
        }`}
      >
        {sent ? "Done!" : "Send"}
      </motion.button>
    </form>
  );
};
