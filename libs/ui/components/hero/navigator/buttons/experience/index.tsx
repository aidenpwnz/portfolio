import { useState } from "react";

export const ExperienceButton: React.FC = () => {
  const [clicked, setClicked] = useState<boolean>(false);

  return (
    <a
      href='#experience'
      className={`navigator ${clicked && "animate-wiggle"}`}
      onClick={() => setClicked(true)}
      onAnimationEnd={() => setClicked(false)}
    >
      Experience
    </a>
  );
};
