import MeInfo from "./Me.info";
import "../../components/Me/Me.css";
import profileImg from "../../assets/photo.jpg";
import InfoNavigation from "../Me.buttons/InfoNavigation";

function Me() {
  return (
    <section className="">
      <div className="flex flex-col-reverse sm:flex-row items-center sm:items-start justify-between gap-4.5">
        <div className="w-full sm:w-auto">
          <div className="text-[var(--color-primary-txt)]">
            <MeInfo />
          </div>
        </div>

        {/* Image on top (mobile), right (desktop) */}
        <div className="img-container">
          <div className="w-[140px] h-[140px] rounded-full overflow-hidden">
            <img
              src={profileImg}
              alt="profile"
              loading="eager"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <InfoNavigation />
    </section>
  );
}

export default Me;
