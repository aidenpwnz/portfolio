import { useState } from "react";

export const ContactsButton: React.FC = () => {
  const [clicked, setClicked] = useState<boolean>(false);

  return (
    <a
      href='#contact-me'
      className={`navigator ${clicked && "animate-wiggle"}`}
      onClick={() => setClicked(true)}
      onAnimationEnd={() => setClicked(false)}
    >
      Contacts
    </a>
  );
};
