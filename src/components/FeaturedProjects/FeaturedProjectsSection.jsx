import React from "react";
import MySubHeading from "../typography/MySubHeading";
import ThemeButton from "../typography/ThemeButton";
import ProjectsData from "../../data/Projects.data.js";
import { Link } from "react-router-dom";

const projects = [...ProjectsData]
  .sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate)) // Descending
  .slice(0, 3); // Take first 3 → newest

export default function FeaturedProjects() {
  return (
    <section
      className="featured-projects flex flex-col gap-6 mt-12
                 text-[var(--color-primary-txt)]"
      id="projects"
    >
      <div
        className="featured-header 
                      flex 
                      flex-row
                      justify-between 
                      flex-wrap
                      row-gap-1
                      items-center"
      >
        {/* <h2 className="featured-subtitle text-lg font-semibold">
          Featured projects
        </h2>*/}
        <MySubHeading color="var(--color-violet)">
          Featured projects
        </MySubHeading>
        {/*<Link
          to="/projects"
          className="flex items-center gap-1 px-3.5 py-3 text-sm bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-md"
          style={{ color: "var(--color-accent)" }}
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
            <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
          </svg>
          <span>View all</span>
        </Link>*/}

        <ThemeButton
          to="/projects"
          icon={
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
              <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
            </svg>
          }
          title="View all"
        >
          View all
        </ThemeButton>
      </div>

      <ul className="flex flex-col gap-1">
        {projects.map((project, idx) => (
          <li key={idx}>
            <Link
              to={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group/project 
             no-underline relative 
             p-2.5 mobile-lg:p-3 
             tablet-md:rounded-md 
             -mx-3 w-[calc(100%+1.5rem)] 
             transition-all flex flex-row 
             items-center gap-3 
             hover:bg-[var(--tint-bg)] 
             rounded-md hover:rounded-md"
              style={{
                "--tint": project.tint,
                "--tint-bg": `${project.tint.replace("rgb", "rgba").replace(")", ", 0.15)")}`,
                "--tint-border": `${project.tint.replace("rgb", "rgba").replace(")", ", 0.4)")}`,
              }}
            >
              <img
                alt={`Icon for project "${project.title}"`}
                width={56}
                height={56}
                className="object-center 
                w-[56px] h-[56px]
                rounded-md p-2 
                transition-all 
                aspect-square 
                object-center
                object-cover 
                bg-[var(--tint-bg)] 
                group-hover/project:p-1 
                group-hover/project:saturate-125 
                group-hover/project:bg-transparent 
                group-hover/project:drop-shadow-
                [0_1px_1px_var(--tint-bg)]"
                src={project.image}
              />
              <div className="flex flex-col gap-1">
                <div className="flex flex-row gap-3 items-center">
                  <p
                    className="text-pretty
                              font-light
                              text-primary-txt 
                              line-clamp-2 
                              group-hover/project:underline 
                              group-hover/project:decoration-2
                              group-hover/project:underline-offset-2
                                transition-all duration-300 ease-in-out"
                    style={{
                      color: "var(--color-primary-txt)",
                      fontSize: ".9rem",
                      fontWeight: "300",
                    }}
                  >
                    {project.title}
                  </p>
                  <span
                    title={`${project.stars} stars on GitHub`}
                    aria-label={`${project.stars} stars on GitHub`}
                    className="flex items-center 
           gap-1  px-1 
           rounded-md transition-colors 
           border border-transparent 
           bg-[var(--tint-bg)] 
           font-medium 
           text-[var(--color-secondary-txt)]
           group-hover/project:text-[var(--color-primary-txt)]
           group-hover/project:border-[var(--tint-border)] 
           text-[0.75rem]"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      role="presentation"
                      className="w-3 h-3 fill-current"
                      aria-hidden="true"
                    >
                      <path
                        d="M17.6 21.5c-.1 0-.3 
                              0-.4-.1L12 18.7l-5.2 2.7c-.3.2-.7.1-1-.1-.3-.2-.4-.5-.4-.9l1-5.8-4.2-4.1c-.2-.1-.3-.5-.2-.8.2-.4.4-.6.8-.7l5.8-.8 2.6-5.3c.3-.6 1.3-.6 1.6 0l2.6 5.3 5.8.8c.3 0 .6.3.7.6.1.3 0 .7-.2.9l-4.2 4.1 1 5.8c.1.3-.1.7-.4.9-.1.2-.3.2-.5.2z"
                      />
                    </svg>
                    <span>{project.stars}</span>
                  </span>
                </div>
                <p
                  className="line-clamp-2 text-pretty text-[0.85rem] font-[300]"
                  style={{ color: "var(--color-secondary-txt)" }}
                >
                  {project.description}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
