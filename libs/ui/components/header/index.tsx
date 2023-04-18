import { type } from "@aidenpwnz/types";
import { EmailSection } from "./email-section";
import { SocialSection } from "./social-section";
import { TitleSection } from "./title-section";

export const Header: React.FC<type.HeaderProps> = (props) => {
  return (
    <header className="max-w-7xl flex flex-row items-center justify-between w-full mx-auto sticky top-0 z-20">
      {/* social icons */}
      <SocialSection />
      {/* email */}
      <EmailSection />
    </header>
  );
};
