import MeInfo from "./Me.info";
import "../../components/Me/Me.css";
import profileImg from "/photo.jpeg";
import InfoNavigation from "../Me.buttons/InfoNavigation";
import { Doing } from "../../components/Molecules/Doing";

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
        <div className="img-container relative">
          {/* Profile Picture */}
          <div className="w-[140px] h-[140px] rounded-full overflow-hidden">
            <img
              src={profileImg}
              alt="profile"
              loading="eager"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating "Thinking..." Note */}
          <div className="absolute -top-3 -left-14">
            {/* Main Bubble */}
            <div
              className="relative flex items-center justify-center text-xs font-medium text-[var(--color-primary-txt)] shadow-lg"
              style={{
                backgroundColor: "var(--color-surface-variant)",
                borderRadius: "1rem",
                height: "44px",
                width: "110px",
                padding: "0.5rem 1rem",
              }}
            >
              <Doing />

              {/* Tail (rotated square like Facebook) */}
              <div
                className="absolute -bottom-1 left-6 w-3 h-3 rotate-45"
                style={{
                  backgroundColor: "var(--color-surface-variant)",
                  borderRadius: "0.1rem",
                  boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
                }}
              ></div>
            </div>

            {/* Thought Dots with Curved Trail */}
            <div className="absolute top-[54px] left-8">
              <span className="absolute top-0 left-0 w-2 h-2 rounded-full bg-[var(--color-surface-variant)] opacity-90 shadow-sm"></span>
              <span className="absolute top-3 left-2 w-1.5 h-1.5 rounded-full bg-[var(--color-surface-variant)] opacity-70 shadow-sm"></span>
              <span className="absolute top-5.5 left-4 w-1 h-1 rounded-full bg-[var(--color-surface-variant)] opacity-50 shadow-sm"></span>
            </div>
          </div>
        </div>
      </div>

      <InfoNavigation />
    </section>
  );
}

export default Me;
