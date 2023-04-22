import { useState } from "react";

export const SkillsButton: React.FC = () => {
  const [clicked, setClicked] = useState<boolean>(false);

  return (
    <a
      href='#skills'
      className={`navigator ${clicked && "animate-wiggle"}`}
      onClick={() => setClicked(true)}
      onAnimationEnd={() => setClicked(false)}
    >
      Skills
    </a>
  );
};
