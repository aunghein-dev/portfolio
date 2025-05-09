import SocialLinks from "../Me.buttons/Btns/SocialLinks";
import MyLink from "../typography/MyLink";
import FirstColLinks from "./Columns/FirstColLinks";
import SecondColLinks from "./Columns/SecondColLinks";
import MyanmarClock from "../MyanmarClock/MyanmarClock";
import MyParagraph from "../typography/MyParagraph";

export default function Footer() {
  return (
    <footer className="footer">
      <div
        className="footer-container 
                      flex flex-row flex-wrap 
                      justify-between
                      gap-y-6"
      >
        <div className="left-footer w-[320px]">
          <div className="text-[1rem] font-[500]">
            <MyLink
              to="/"
              title="Aung Hein - Home Page"
              underline={false}
              onClick={(e) => {
                if (window.location.pathname === "/") {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  e.preventDefault();
                }
              }}
            >
              Aung Hein
            </MyLink>
          </div>

          {/*<div
            className="font-light leading-[1.6rem]
                            text-[0.9rem] mt-2 text-[var(--color-secondary-txt)]"
          >
            Passionate and creative frontend software engineer from Myanmar 🇲🇲
          </div>
          */}
          <div className="mt-3">
            <MyParagraph>
              Passionate and creative frontend software engineer from Myanmar{" "}
              <span style={{ color: "var(--color-primary-txt)" }}>🇲🇲</span>
            </MyParagraph>
          </div>

          <div className="mt-3">
            <SocialLinks />
          </div>
        </div>

        <div
          className="right-footer 
                     flex flex-row
                     flex-wrap
                     justify-between
                     w-[260px] ml-2 mb-6
                     text-[var(--color-secondary-txt)]"
        >
          <div className="right-first-col">
            <FirstColLinks />
          </div>
          <div className="right-second-col">
            <SecondColLinks />
          </div>
        </div>
      </div>
      <div className="text-[var(--color-secondary-txt)] text-[0.85rem]">
        <MyanmarClock />
      </div>
    </footer>
  );
}
