import React from "react";
import MySubHeading from "../typography/MySubHeading";

const activityData = [
  {
    type: "Last Played",
    title: "Unshatter",
    creator: "Linkin Park",
    link: "https://song.link/s/0D7RVmTlKkmRchqKA4zJht",
    image: "https://i.scdn.co/image/ab67616d00001e02e53c3e44ebe7267a79842819",
    backgroundClass: "bg-white/10 dark:bg-brand-800/15",
    isMusic: true,
  },
  {
    type: "Reading (77.09%)",
    title: "TypeScript Crash Course",
    creator: "Daniel Cavalcante",
    link: "https://z-library.co/book/18149025",
    image: "https://z-library.co/images/18100000/18149025.webp",
    backgroundClass: "bg-white/10 dark:bg-brand-800/15",
    isMusic: false,
  },
];

export default function Activity() {
  return (
    <section
      className="flex flex-col gap-5"
      id="activity"
      style={{
        color: "var(--color-primary-txt)",
      }}
    >
      <MySubHeading color="var(--color-primary-txt)">Activity</MySubHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 tablet-sm:gap-4 mt-2">
        {activityData.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            title={`"${item.title}" by ${item.creator}`}
            className={`self-start 
                  font-normal block relative 
                  w-full h-auto max-w-full 
                  rounded-md no-underline 
                  transition truncate min-h-[6.125rem]
                  overflow-hidden
                  ${item.isMusic ? "max-h-28" : ""}`}
          >
            {/* Blurred Background for Music */}
            {item.isMusic && (
              <img
                src={item.image}
                alt={`Album cover for "${item.title}" by ${item.creator}`}
                className="object-cover object-center 
                     absolute w-[110%] -top-[15%]
                     mobile-md:-top-[35%] -z-1 
                     rounded-md opacity-20 
                     saturate-500 pointer-events-none 
                     select-none blur-xs"
              />
            )}

            <div
              className={`h-full w-full flex flex-row 
                    gap-3.5 p-3 items-center rounded-md
                    ${item.backgroundClass}`}
              style={
                !item.isMusic
                  ? {
                      background:
                        "linear-gradient(to bottom right, rgba(255, 153, 190, 0.15), rgba(220, 199, 245, 0.15), rgba(250, 175, 224, 0.15))",
                    }
                  : {}
              }
            >
              <img
                src={item.image}
                alt={`Cover for "${item.title}"`}
                className={`object-cover object-center
                      aspect-square w-auto h-full 
                      rounded-md
                      transition scale-95 group-hocus/track:scale-100 ${
                        item.isMusic
                          ? "rounded-md max-h-18 tablet-sm:max-h-20"
                          : "rounded-l-0.5 rounded-r-1.5 max-h-18 tablet-sm:max-h-20"
                      }`}
              />
              <div className="flex flex-col flex-1 gap-1.5 truncate">
                <p
                  className="flex items-center gap-3 text-[0.8rem]
                        font-[300] tracking-wider uppercase"
                  style={{ color: "var(--color-tertiary-txt)" }}
                >
                  <span>{item.type}</span>
                </p>
                <span
                  className="text-[0.9rem] truncate font-[300] transition-colors"
                  style={{ color: "var(--color-secondary-txt)" }}
                >
                  {item.title}
                </span>
                <span
                  className="mt-[-0.4rem] text-[0.75rem] truncate 
                        text-secondary-txt transition-colors"
                  style={{ color: "var(--color-tertiary-txt)" }}
                >
                  {item.creator}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
