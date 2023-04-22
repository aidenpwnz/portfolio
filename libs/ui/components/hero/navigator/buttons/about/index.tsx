import { useState } from "react";

export const AboutButton: React.FC = () => {
  const [clicked, setClicked] = useState<boolean>(false);

  return (
    <a
      href='#about'
      className={`navigator ${clicked && "animate-wiggle"}`}
      onClick={() => setClicked(true)}
      onAnimationEnd={() => setClicked(false)}
    >
      About
    </a>
  );
};
