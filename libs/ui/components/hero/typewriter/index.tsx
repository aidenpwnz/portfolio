import { Cursor, useTypewriter } from "react-simple-typewriter";

export const Typewriter: React.FC = () => {
  const text = useTypewriter({
    words: [
      "🤖 introduceSelf()",
      "Hi, my name is Luca Pellegrino!",
      "I ❤ <Coding /> and <Tech />",
    ],
    loop: true,
    delaySpeed: 2000,
  })[0];

  return (
    <h1 className="absolute top-[55%] left-1/2 -translate-x-1/2 z-[11] text-center">
      <span className="text-lg text-center md:text-2xl tracking-widest uppercase">
        {text}
      </span>
      <Cursor cursorColor="#ffffff" />
    </h1>
  );
};
