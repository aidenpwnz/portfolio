import { Circles } from "./circles";
import { Navigator } from "./navigator";
import { ProfilePicture } from "./profile-picture";
import { Typewriter } from "./typewriter";

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="max-w-7xl mx-auto snap-center">
      <Circles />
      <ProfilePicture />
      <Typewriter />
      <Navigator />
    </section>
  );
};
