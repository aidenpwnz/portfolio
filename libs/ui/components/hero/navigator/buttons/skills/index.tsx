import { useAtom } from "@aidenpwnz/utils";

export const SkillsButton: React.FC = () => {
  const clicked = useAtom(false);

  return (
    <a
      href="#skills"
      className={`navigator ${clicked.get() && "animate-wiggle"}`}
      onClick={() => clicked.set((s) => true)}
      onAnimationEnd={() => clicked.set((s) => false)}
    >
      Skills
    </a>
  );
};
