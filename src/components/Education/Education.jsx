import MySubHeading from "../typography/MySubHeading";

export default function Education() {
  const educationList = [
    {
      degree: "Bachelor of Computer Science",
      school: "University of Mandalay",
      duration: "2013 – 2018",
      schoolLink: "https://www.mu.edu.mm/",
      schoolLogo: "/mu.png",
    },
    {
      degree: "High School Certificate",
      school: "No.(11) Mandalay High School",
      duration: "2003 – 2013",
      schoolLink:
        "https://www.edge.com.mm/listing/aung-myay-thar-san-b-e-h-s-11-u132862.html",
      schoolLogo: "/behs11.jpg",
    },
  ];

  return (
    <div style={{ color: "var(--color-primary-txt)", wordSpacing: "1px" }}>
      <MySubHeading color="var(--color-primary-txt)">Education</MySubHeading>

      <div className="exp-container mt-6">
        <section className="flex flex-col gap-6" id="education">
          <ol className="flex flex-col gap-1.5 -mb-4">
            {educationList.map((edu, index) => (
              <li key={index}>
                <a
                  className="group self-start 
                            font-normal group/edu 
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
                            hover:bg-[rgb(138,180,248,0.1)]"
                  title={`${edu.degree} at ${edu.school}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={edu.schoolLink}
                >
                  <img
                    alt={edu.school}
                    loading="lazy"
                    width="200"
                    height="200"
                    decoding="async"
                    className="object-cover 
                              object-center 
                              size-12 rounded-md 
                              select-none
                              mr-1.5"
                    src={edu.schoolLogo}
                  />
                  <div className="flex flex-col flex-1 gap-[0.2rem]">
                    <p
                      className="font-mono tabular-nums 
                                  text-[0.8rem]"
                      style={{
                        color: "var(--color-tertiary-txt)",
                        wordSpacing: "-4px",
                      }}
                    >
                      {edu.duration}
                    </p>
                    <p
                      className="line-clamp-1 text-[0.95rem] 
                                  font-[400] group-hover:underline"
                    >
                      {edu.school}
                    </p>
                    <p
                      className="line-clamp-1 text-[0.9rem] flex-1 font-[300]"
                      style={{ color: "var(--color-secondary-txt)" }}
                    >
                      {edu.degree}
                    </p>
                  </div>
                </a>
                {index !== educationList.length - 1 && (
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
