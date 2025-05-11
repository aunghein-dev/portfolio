import AboutInfo from "../components/About/AboutInfo";
import Education from "../components/Education/Education";
import Experience from "../components/Experience/Experience";
import SocialLinks from "../components/Me.buttons/Btns/SocialLinks";
import Skills from "../components/Skills/Skills";
import Activity from "../components/Activity/Activity";
import Footer from "../components/Footer/Footer";

export default function AboutPage() {
  return (
    <div>
      <div className="mt-16">
        <AboutInfo />
      </div>

      <div
        style={{
          color: "var(--color-primary-txt)",
        }}
      >
        <SocialLinks />
      </div>

      <div className="mt-14">
        <Skills />
      </div>

      <div className="mt-14">
        <Experience />
      </div>

      <div className="mt-[3.7rem]">
        <Education />
      </div>

      <div className="mt-[3.7rem]">
        <Activity />
      </div>

      <div className="mt-7">
        <div className="h-[1px] bg-[var(--color-divider)] mb-7"></div>
        <div className="mb-7 ">
          <Footer />
        </div>
      </div>
    </div>
  );
}
