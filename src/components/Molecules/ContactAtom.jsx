import React from "react";
import MyanmarClock from "../MyanmarClock/MyanmarClock";
import SocialLinks from "../Me.buttons/Btns/SocialLinks";
import { Doing } from "../Molecules/Doing";
import dayjs from "dayjs";

export default function ContactAtom() {
  return (
    <div
      className="flex flex-col md:flex-row flex-wrap 
                    justify-between items-start w-full gap-3"
    >
      {/* Paragraph */}
      <div
        className=" flex-1 min-w-[250px] text-[var(--color-paragraph)]
              text-[0.95rem] leading-[1.7rem]
              font-[300]  mb-4"
      >
        <div className="flex flex-wrap items-center mb-2">
          <span>It's currently</span>
          <div className="mr-1 ml-1 ">
            <MyanmarClock pure />
          </div>
          <p className="flex flex-wrap items-center">
            <span>in&nbsp;</span>
            <a
              title="Myanmar (Burma)"
              href="https://www.google.com/maps/place/Myanmar (Burma)/@4,-72z/"
              data-umami-event="Link to Myanmar map"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              Myanmar
            </a>
            <span>&nbsp;🇲🇲&nbsp;</span>
            <span>and&nbsp;</span>
          </p>

          <Doing
            time={dayjs().format("h")}
            isPm={dayjs().format("A") === "PM"}
            isWeekend={dayjs().day() === 6 || dayjs().day() === 7}
          />
        </div>

        <div>
          Feel free to send me a message, I will get back to you as soon as
          possible.
        </div>
      </div>

      {/* Links */}
      <div className="flex-1 min-w-[250px]">
        <SocialLinks extended />
      </div>
    </div>
  );
}
