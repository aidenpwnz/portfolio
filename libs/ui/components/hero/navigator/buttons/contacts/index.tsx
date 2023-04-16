import { useAtom } from "@aidenpwnz/utils";

export const ContactsButton: React.FC = () => {
  const clicked = useAtom(false);

  return (
    <a
      href="#contacts"
      className={`navigator ${clicked.get() && "animate-wiggle"}`}
      onClick={() => clicked.set((s) => true)}
      onAnimationEnd={() => clicked.set((s) => false)}
    >
      Contacts
    </a>
  );
};
