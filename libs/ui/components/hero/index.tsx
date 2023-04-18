import { Circles } from "./circles";
import { Navigator } from "./navigator";
import { ProfilePicture } from "./profile-picture";
import { Typewriter } from "./typewriter";

export const Hero: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto h-screen w-full relative">
      <Circles />
      <ProfilePicture />
      <Typewriter />
      <Navigator />
    </div>
  );
};
