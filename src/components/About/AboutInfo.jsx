import React from "react";
import MySubHeading from "../typography/MySubHeading";
import MyLink from "../typography/MyLink";
import MyParagraph from "../typography/MyParagraph";
import ThemeButton from "../typography/ThemeButton";
import { FiDownload } from "react-icons/fi";

export default function AboutInfo() {
  return (
    <section className="flex flex-col gap-5" id="about">
      {/* <h1
        className="filter saturate-125 brightness-115 text-[25px] font-[500]"
        style={{ color: "var(--color-green)" }}
      >
        About
      </h1>
      */}

      <div className="flex flex-row items-center justify-between">
        <MySubHeading color="var(--color-green)">About</MySubHeading>
        <ThemeButton
          icon={<FiDownload />}
          target="_blank"
          to="/aunghein-cv-form-v1.pdf"
        >
          {" "}
          CV Form
        </ThemeButton>
      </div>

      <MyParagraph>
        <span role="img" aria-label="waving hand">
          👋
        </span>{" "}
        Hey there! I'm a passionate full-stack developer based in{" "}
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
        {/* <a
          title="Myanmar (Burma)"
          href="https://www.google.com/maps/place/Myanmar (Burma)/@4,-72z/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-medium text-[var(--color-accent-dark)] 
            hover:underline decoration-[var(--color-accent)] 
            hover:text-[var(--color-accent)]
            decoration-[var(--color-divider)]
            hover:decoration-[var(--color-accent)] 
            decoration-[2.5px]
            self-start transition-colors underline"
        >
          Myanmar{" "}
          <span role="img" aria-label="Myanmar flag">
            🇲🇲
          </span>
        </a>
        */}
        , with hands-on experience building high-performance applications using
        modern web technologies.
      </MyParagraph>

      <MyParagraph>
        My core tech stack includes Spring Boot for scalable backend services,
        HTML, CSS, and JavaScript for accessible, responsive UIs, and React.js
        for dynamic frontends. I'm also deeply familiar with MySQL and designing
        efficient schemas for large datasets.
      </MyParagraph>

      <figure className="mt-3">
        <div style={{ aspectRatio: "21 / 9" }}>
          <img
            alt="In Mandalay, Myanmar – May '25"
            width="1280"
            height="533"
            decoding="async"
            className="object-cover object-top h-full rounded-md"
            src="/profile.jpg"
            srcSet="/profile.jpg 1x, /profile.jpg 2x"
            style={{ color: "transparent" }}
          />
        </div>
        <figcaption
          className="text-center text-[0.85rem] mt-2"
          style={{ color: "var(--color-tertiary-txt)" }}
        >
          In Mandalay, Myanmar – May '25
        </figcaption>
      </figure>

      <MyParagraph className="max-w-nice">
        I thrive in performance-focused environments and have worked on projects
        handling real-time data and large-volume traffic efficiently. My work
        often involves data-intensive applications, optimizing database queries,
        and improving UX responsiveness.
      </MyParagraph>

      <MyParagraph className="max-w-nice">
        I'm also a strong believer in clean architecture, code reusability, and
        writing maintainable software that can scale with evolving business
        needs.
      </MyParagraph>

      <MyParagraph className="max-w-nice">
        I love collaborating with developers around the globe and actively
        contribute to open source projects. You can find some of my code and
        contributions on{" "}
        {/* <a
          href="https://github.com/aunghein-dev"
          title="GitHub"
          className="inline-block font-medium text-[var(--color-accent-dark)] 
            hover:underline decoration-[var(--color-accent)] 
            hover:text-[var(--color-accent)]
            decoration-[var(--color-divider)]
            hover:decoration-[var(--color-accent)] 
            decoration-[2.5px]
            self-start transition-colors underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        */}
        <MyLink
          to="https://github.com/aunghein-dev"
          title="GitHub"
          data="Link to GitHub"
          aria="Link to GitHub"
          target="_blank"
        >
          GitHub
        </MyLink>
        .
      </MyParagraph>

      <div className="mt-6 mb-4">
        <h2
          className="mb-3"
          style={{ fontSize: "1rem", color: "var(--color-primary-txt)" }}
        >
          Let's connect!
        </h2>
        <MyParagraph>
          Feel free to{" "}
          {/*<a
            title="Send Aung Hein an Email"
            className="inline-block font-medium text-[var(--color-accent-dark)] 
            hover:underline decoration-[var(--color-accent)] 
            hover:text-[var(--color-accent)]
            decoration-[var(--color-divider)]
            hover:decoration-[var(--color-accent)] 
            decoration-[2.5px]
            self-start transition-colors underline"
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:aunghein.mailer@gmail.com?subject=Hi%20Aung Hein!"
          >
            send me a message
          </a>*/}
          <MyLink
            to="mailto:aunghein.mailer@gmail.com?subject=Hi%20Aung Hein!"
            title="Send Aung Hein an Email"
            data="Send Aung Hein an Email"
            aria="Send Aung Hein an Email"
            target="_blank"
            rel="noopener noreferrer"
          >
            send me a message
          </MyLink>
          , or find me on social media:
        </MyParagraph>
      </div>
    </section>
  );
}
