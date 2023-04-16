import { useAtom } from "@aidenpwnz/utils";

export const ExperienceButton: React.FC = () => {
  const clicked = useAtom(false);

  return (
    <a
      href="#experience"
      className={`navigator ${clicked.get() && "animate-wiggle"}`}
      onClick={() => clicked.set((s) => true)}
      onAnimationEnd={() => clicked.set((s) => false)}
    >
      Experience
    </a>
  );
};
