import { WavingHello } from "./WavingHello";
import { WavingSpan } from "../../util/WavingSpan";
import MyLink from "../typography/MyLink";
import MyParagraph from "../typography/MyParagraph";

export default function MeInfo() {
  return (
    <div>
      <div className="text-[1.6rem]">
        <WavingSpan />
        <WavingHello />
      </div>

      <div className="info-box mt-2">
        <span className="flex flex-row items-center gap-2 text-shadow shadow-brand-300">
          <span className="me text-[1.7rem] mt-0.5">
            I am <span className="my-name">Aung Hein</span>
          </span>
          <svg
            viewBox="0 0 24 24"
            role="presentation"
            className="size-6 mt-0.5 pointer-events-none select-none"
            aria-hidden="true"
          >
            <path
              d="M22 12.1c0-1.4-.9-2.7-2.2-3.3.5-1.4.2-2.9-.8-3.9s-2.5-1.3
            -3.9-.8c-.7-1.3-1.9-2.2-3.3-2.2s-2.7.9-3.4 2.2c-1.4-.5-2.9-.2-3.9.8s-1.3 
            2.5-.8 3.9c-1.3.7-2.2 1.9-2.2 3.3s.9 
            2.7 2.2 3.3c-.5 1.4-.2 2.9.8 3.9s2.5 1.3 3.9.8c.7 
            1.3 1.9 2.2 3.3 2.2s2.7-.9 3.3-2.2c1.4.5 2.9.2 3.9-.8s1.3-2.5.8-3.9c1.4-.6 2.3-1.8 
            2.3-3.3zm-11.7 4.2-3.7-3.7L8 11.2l2.3 2.3L15 8.2l1.5 1.4-6.2 6.7z"
              style={{ fill: "rgb(29, 155, 240)" }}
            />
            <path
              d="m10.3 16.3-3.7-3.7L8 11.2l2.3 2.3L15 8.2l1.5 1.4-6.2 6.7z"
              style={{ fill: "rgb(255, 255, 255)" }}
            />
          </svg>
        </span>

        <div className="mt-4">
          <MyParagraph>
            <div className="tracking-wide">
              {/*className="info-text"*/}I am a full-stack software developer
              from{" "}
              <MyLink
                to="https://www.google.com/maps/place/Myanmar/@4,-72z/"
                title="Visit Myanmar on Google Maps"
                data="Link to Myanmar map"
                aria="Link to Myanmar on Google Maps"
                target="_blank"
              >
                Myanmar (Burma){" "}
                <span role="img" aria-label="Flag of Myanmar">
                  🇲🇲
                </span>
              </MyLink>
              <span>
                , skilled in building scalable systems and intuitive UIs. I
                deliver performance-driven software across both frontend and
                backend, ensuring efficient, seamless user experiences.
              </span>
              {/* 
           <a
              title="Visit Myanmar on Google Maps"
              data-umami-event="Link to Myanmar map"
              className="country-link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.google.com/maps/place/Myanmar/@4,-72z/"
              aria-label="Link to Myanmar on Google Maps"
            >
              Myanmar (Burma) <span></span>
              <span role="img" aria-label="Flag of Myanmar">
                🇲🇲
              </span>
            </a>
           */}
            </div>

            <div className="info-text mt-2.5 tracking-wide">
              Passionate about solving complex challenges, I focus on continuous
              improvement and impactful solutions. I thrive in collaborative
              environments, adapting quickly to new technologies and
              contributing to meaningful projects.
            </div>
          </MyParagraph>
        </div>
      </div>
    </div>
  );
}
