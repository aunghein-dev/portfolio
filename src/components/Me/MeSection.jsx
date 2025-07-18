import MeInfo from "./Me.info";
import "../../components/Me/Me.css";
import profileImg from "/photo.jpeg";
import InfoNavigation from "../Me.buttons/InfoNavigation";
import { Doing } from "../../components/Molecules/Doing";
import dayjs from "dayjs";
import { useState } from "react";

function Me() {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <section className="">
      <div className="flex flex-col-reverse sm:flex-row items-center sm:items-start justify-between gap-4.5">
        <div className="w-full sm:w-auto">
          <div className="text-[var(--color-primary-txt)]">
            <MeInfo />
          </div>
        </div>

        {/* Image on top (mobile), right (desktop) */}
        <div className="relative">
          {/* Profile Picture */}
          <div className="w-[140px] h-[140px] rounded-full overflow-hidden">
            {loading && (
              <div className="w-full h-full bg-gray-300 animate-pulse"></div> // Loading Skeleton
            )}
            <img
              src={profileImg}
              alt="profile"
              loading="eager"
              className={`w-full h-full object-cover ${loading ? "opacity-0" : "opacity-100"} transition-opacity duration-300`} // Smooth transition
              onLoad={handleImageLoad}
            />
          </div>

          {/* Floating "Thinking..." Note */}
          <div
            className={`absolute -top-5.5 -left-16 ${loading ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
          >
            {/* Main Bubble */}
            <div
              className="relative flex items-center justify-center text-xs font-medium text-[var(--color-secondary-txt)] shadow-lg"
              style={{
                backgroundColor: "var(--color-surface)",
                borderRadius: "4rem",
                height: "50px",
                maxWidth: "140px",
                padding: "0.5rem 1rem",
              }}
            >
              <Doing
                time={dayjs().format("h")}
                isPm={dayjs().format("A") === "PM"}
                isWeekend={dayjs().day() === 6 || dayjs().day() === 7}
              />

              {/* Tail (rotated square like Facebook) */}
              <div
                className="absolute -bottom-1 left-11 w-3 h-3 rotate-45"
                style={{
                  backgroundColor: "var(--color-surface)",
                  borderRadius: "0.1rem",
                  boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
                  zIndex: "-1",
                }}
              ></div>
            </div>

            {/* Thought Dots with Curved Trail */}
            <div className="absolute top-[59px] left-12.5">
              <span className="absolute top-0 left-0 w-2 h-2 rounded-full bg-[var(--color-surface)] opacity-99 shadow-sm"></span>
              <span className="absolute top-2.5 left-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-surface)] opacity-90 shadow-sm"></span>
              <span className="absolute top-4.5 left-3.5 w-1 h-1 rounded-full bg-[var(--color-surface)] opacity-60 shadow-sm"></span>
            </div>
          </div>
        </div>
      </div>

      <InfoNavigation />
    </section>
  );
}

export default Me;
