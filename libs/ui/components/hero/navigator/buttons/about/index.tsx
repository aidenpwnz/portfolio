import { useAtom } from "@aidenpwnz/utils";

export const AboutButton: React.FC = () => {
  const clicked = useAtom(false);

  return (
    <a
      href="#about"
      className={`navigator ${clicked.get() && "animate-wiggle"}`}
      onClick={() => clicked.set((s) => true)}
      onAnimationEnd={() => clicked.set((s) => false)}
    >
      About
    </a>
  );
};
