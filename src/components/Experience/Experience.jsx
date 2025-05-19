import MySubHeading from "../typography/MySubHeading";

export default function Experience() {
  const experiences = [
    {
      title: "Senior Backend Developer",
      company: "TuTu Micro Finance - Myanmar",
      duration: "Jan 2024 – Dec 2024",
      companyLink:
        "https://www.woorifg.com/eng/company/network/global/contentsid/171/index.do",
      companyLogo: "/tutu.jpg".replace("&amp;", "&"),
    },
    {
      title: "Junior Database Administrator",
      company: "TuTu Micro Finance - Myanmar",
      duration: "May 2021 – Dec 2023",
      companyLink:
        "https://www.woorifg.com/eng/company/network/global/contentsid/171/index.do",
      companyLogo: "/tutu.jpg".replace("&amp;", "&"),
    },
    {
      title: "IT Helpdesk",
      company: "Carnival Cruise Line - United States",
      duration: "Aug 2019 – Sep 2020",
      companyLink: "https://shipjobs.carnival.com",
      companyLogo: "/carnival_cruise.jpeg".replace("&amp;", "&"),
    },
  ];

  return (
    <div style={{ color: "var(--color-primary-txt)", wordSpacing: "1px" }}>
      <MySubHeading color="var(--color-primary-txt)">Experience</MySubHeading>

      <div className="exp-container mt-8">
        <section className="flex flex-col gap-6" id="experience">
          <ol className="flex flex-col gap-1.5 -mb-4">
            {experiences.map((experience, index) => (
              <li key={index}>
                <a
                  className="group self-start 
                            font-normal group/exp 
                            no-underline relative 
                            flex flex-row 
                            items-start gap-2.5 
                            mobile-lg:gap-3 
                            tablet-md:gap-3.5 
                            p-2.5 mobile-lg:p-3 
                            tablet-md:rounded-2.5 
                            rounded-md
                            -mx-3 w-[calc(100%_+_1.5rem)] 
                            bg-transparent transition-colors
                            hover:bg-[rgb(138,180,248,0.1)]
                            group-hover:underline"
                  title={`${experience.title} at ${experience.company}`}
                  target="_blank"
                  data-umami-event="Experience"
                  data-umami-event-company={experience.company}
                  rel="noopener noreferrer"
                  href={experience.companyLink}
                  style={{ "--tint": "46 76 148" }}
                >
                  <img
                    alt={experience.company}
                    loading="lazy"
                    width="200"
                    height="200"
                    decoding="async"
                    className="object-cover 
                              object-center 
                              size-12 rounded-md 
                              select-none
                              mr-1.5"
                    src={experience.companyLogo}
                  />
                  <div className="flex flex-col flex-1 gap-[0.2rem]">
                    <p
                      className="font-mono tabular-nums text-[0.8rem]"
                      style={{
                        color: "var(--color-tertiary-txt)",
                        wordSpacing: "-4px",
                      }}
                    >
                      <span>{experience.duration.split(" – ")[0]}</span> –{" "}
                      <span>{experience.duration.split(" – ")[1]}</span>
                    </p>
                    <p
                      className="line-clamp-1 text-[0.95rem] 
                                  font-[400] group-hover:underline"
                    >
                      {experience.company}
                    </p>
                    <p
                      className="line-clamp-1 text-[0.9rem] flex-1 font-[300]"
                      style={{ color: "var(--color-secondary-txt)" }}
                    >
                      {experience.title}
                    </p>
                  </div>
                </a>
                {index !== experiences.length - 1 && (
                  <div
                    className="w-[1.25px] h-[3rem] mt-[-2rem] ml-[1.3rem] absolute
                            brightness-40 saturate-125 z-[-1]"
                    style={{ backgroundColor: "var(--color-tertiary-txt)" }}
                  ></div>
                )}
              </li>
            ))}
          </ol>
        </section>
      </div>
    </div>
  );
}
