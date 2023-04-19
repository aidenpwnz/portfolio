import { EmailSection } from "./email-section";
import { SocialSection } from "./social-section";
import { TitleSection } from "./title-section";

export const Header: React.FC = () => {
  return (
    <header className='max-w-7xl flex flex-row items-center justify-between w-full mx-auto sticky top-0 z-20 lg:p-4'>
      {/* social icons */}
      <SocialSection />
      {/* email */}
      <EmailSection />
    </header>
  );
};
