import { Cursor, useTypewriter } from "react-simple-typewriter";

export const Typewriter: React.FC = () => {
  const text = useTypewriter({
    words: [
      "introduceSelf()",
      "Hello, my name is Luca Pellegrino!",
      "I ❤ <Coding /> and <Tech />",
    ],
    loop: true,
    delaySpeed: 2000,
  })[0];

  return (
    <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 z-[11] text-center">
      <span className="text-lg font-bold text-center md:text-2xl">{text}</span>
      <Cursor cursorColor="#ffffff" />
    </h1>
  );
};
