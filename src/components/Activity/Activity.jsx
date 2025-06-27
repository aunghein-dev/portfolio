import React, { useEffect, useState } from "react";
import MySubHeading from "../typography/MySubHeading";
import { FaMusic } from "react-icons/fa";

const activityData = [
  {
    type: "Reading (77.09%)",
    title: "TypeScript Crash Course",
    creator: "Daniel Cavalcante",
    link: "https://z-library.co/book/18149025",
    image: "https://z-library.co/images/18100000/18149025.webp",
    backgroundClass: "bg-white/10",
    isMusic: false,
  },
];

export default function Activity() {
  const [dynamicActivityData, setDynamicActivityData] = useState(activityData);
  const [nowPlaying, setNowPlaying] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fetch Spotify Data (now playing)
  useEffect(() => {
    async function fetchSpotifyData() {
      const API = import.meta.env.VITE_SPOTIFY_API_URL;

      if (!API) {
        console.warn("Missing VITE_SPOTIFY_API_URL");
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(API, { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to fetch");

        const data = await res.json();
        setNowPlaying(data.isPlaying || false);

        if (data?.track?.name) {
          const musicActivity = {
            type:
              data.isPlaying === false || data.type === "last_played"
                ? "Last Played"
                : "Now Playing",
            title: data.track.name,
            creator: data.track.artist,
            link: data.track.url,
            image: data.track.cover,
            backgroundClass: "bg-white/10",
            isMusic: true,
          };
          setDynamicActivityData([musicActivity, ...activityData]);
        } else {
          setDynamicActivityData(activityData);
        }
      } catch (err) {
        console.error("Error fetching Spotify data:", err);
        setDynamicActivityData(activityData);
      } finally {
        setLoading(false);
      }
    }

    fetchSpotifyData();
  }, []);

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
        {!loading &&
          dynamicActivityData.map((item, index) => (
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
                  transition truncate 
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
                    <span className="flex flex-row items-center gap-2">
                      {" "}
                      {item.isMusic && (
                        <span>
                          {nowPlaying === true ? (
                            <span className="flex items-end text-brand-500">
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 100 100"
                                fill="currentColor"
                              >
                                <rect x="15" y="30" width="10" height="40">
                                  <animate
                                    attributeName="height"
                                    values="40;80;40"
                                    dur="1s"
                                    repeatCount="indefinite"
                                    begin="0s"
                                  />
                                  <animate
                                    attributeName="y"
                                    values="30;10;30"
                                    dur="1s"
                                    repeatCount="indefinite"
                                    begin="0s"
                                  />
                                </rect>
                                <rect x="45" y="30" width="10" height="40">
                                  <animate
                                    attributeName="height"
                                    values="40;60;40"
                                    dur="1s"
                                    repeatCount="indefinite"
                                    begin="0.2s"
                                  />
                                  <animate
                                    attributeName="y"
                                    values="30;20;30"
                                    dur="1s"
                                    repeatCount="indefinite"
                                    begin="0.2s"
                                  />
                                </rect>
                                <rect x="75" y="30" width="10" height="40">
                                  <animate
                                    attributeName="height"
                                    values="40;70;40"
                                    dur="1s"
                                    repeatCount="indefinite"
                                    begin="0.4s"
                                  />
                                  <animate
                                    attributeName="y"
                                    values="30;15;30"
                                    dur="1s"
                                    repeatCount="indefinite"
                                    begin="0.4s"
                                  />
                                </rect>
                              </svg>
                            </span>
                          ) : (
                            <FaMusic
                              className="text-brand-500 opacity-70"
                              size={12}
                            />
                          )}
                        </span>
                      )}
                      {item.type}
                    </span>
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
