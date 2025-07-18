import MoreAboutMe from "./Btns/MoreAboutMe";
import SocialLinks from "../Me.buttons/Btns/SocialLinks";
export default function InfoNavigation() {
  return (
    <div className="text-[var(--color-primary-txt)] mt-6 flex flex-wrap items-center gap-2">
      <MoreAboutMe />
      <SocialLinks />
    </div>
  );
}
