import React, { useEffect, useState } from "react";

const paths = {
  1: "M12 20C16.42 20 20 16.42 20 12S16.42 4 12 4 4 7.58 4 12 7.58 20 12 20M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22C6.47 22 2 17.5 2 12C2 6.5 6.5 2 12 2M15.3 7.8L12.3 13H11V7H12.5V9.65L14 7.05L15.3 7.8Z",
  2: "M12 20C16.42 20 20 16.42 20 12S16.42 4 12 4 4 7.58 4 12 7.58 20 12 20M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22C6.47 22 2 17.5 2 12C2 6.5 6.5 2 12 2M12.5 13V13H11V7H12.5V11.26L16.2 9.13L16.95 10.43L12.5 13Z",
  3: "M12 20C16.4 20 20 16.4 20 12S16.4 4 12 4 4 7.6 4 12 7.6 20 12 20M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2M17 11.5V13H11V7H12.5V11.5H17Z",
  4: "M12 20C16.4 20 20 16.4 20 12S16.4 4 12 4 4 7.6 4 12 7.6 20 12 20M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2M17 13.9L16.3 15.2L11 12.3V7H12.5V11.4L17 13.9Z",
  5: "M12 20C16.4 20 20 16.4 20 12S16.4 4 12 4 4 7.6 4 12 7.6 20 12 20M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2M15.3 16.2L14 17L11 11.8V7H12.5V11.4L15.3 16.2Z",
  6: "M12 20C16.4 20 20 16.4 20 12S16.4 4 12 4 4 7.6 4 12 7.6 20 12 20M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2M12.5 7V17H11V7H12.5Z",
  7: "M12 20C16.4 20 20 16.4 20 12S16.4 4 12 4 4 7.6 4 12 7.6 20 12 20M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2M12.5 7V12.2L9.8 17L8.5 16.2L11 11.8V7H12.5Z",
  8: "M12 20C16.4 20 20 16.4 20 12S16.4 4 12 4 4 7.6 4 12 7.6 20 12 20M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2M12.5 12.8L7.7 15.6L7 14.2L11 11.9V7H12.5V12.8Z",
  9: "M12 20C16.4 20 20 16.4 20 12S16.4 4 12 4 4 7.6 4 12 7.6 20 12 20M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2M12.5 7V13H7V11.5H11V7H12.5Z",
  10: "M12 20C16.4 20 20 16.4 20 12S16.4 4 12 4 4 7.6 4 12 7.6 20 12 20M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2M12.5 13H11L7 10.7L7.8 9.4L11.1 11.3V7H12.6V13Z",
  11: "M12 20C16.4 20 20 16.4 20 12S16.4 4 12 4 4 7.6 4 12 7.6 20 12 20M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2M12.5 7V13H11L8.5 8.6L9.8 7.8L11 10V7H12.5Z",
  12: "M12 20C16.42 20 20 16.42 20 12S16.42 4 12 4 4 7.58 4 12 7.58 20 12 20M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22C6.47 22 2 17.5 2 12C2 6.5 6.5 2 12 2M12.5 13.03H11V7H12.5V13.03Z",
};

const getMyanmarHourIconPath = () => {
  const now = new Date();
  const myanmarOffsetMinutes = 6.5 * 60;
  const localOffsetMinutes = now.getTimezoneOffset();
  const myanmarTime = new Date(
    now.getTime() + (myanmarOffsetMinutes + localOffsetMinutes) * 60000
  );
  let hour = myanmarTime.getHours() % 12 || 12;
  return paths[hour] || paths[4];
};

export default function MyanmarClock({ pure = "" }) {
  const [currentTime, setCurrentTime] = useState("");
  const [iconPath, setIconPath] = useState(paths[4]);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const mmTime = new Date(utc + 6.5 * 60 * 60 * 1000);
      const hours = mmTime.getHours();
      const minutes = mmTime.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";
      const h12 = hours % 12 || 12;

      const formattedTime = `${String(h12).padStart(2, "0")}<span class="animate-pulse">:</span>${String(minutes).padStart(2, "0")}`;
      const formattedString =
        pure === ""
          ? `<div><span class="font-mono tabular-nums">${formattedTime}</span> <span>${ampm}</span> <abbr title="Myanmar Standard Time" class="no-underline">MMT.</abbr></div>`
          : `<div class="-ml-1.5"><span class="font-mono tabular-nums">${formattedTime}</span> <span>${ampm}</span></div>`;

      setCurrentTime(formattedString);
      setIconPath(getMyanmarHourIconPath());
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [pure]);

  return (
    <div
      className="flex items-center gap-2 uppercase"
      style={{ minWidth: "max-content" }}
    >
      <svg
        className="w-5 h-5 text-current"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d={iconPath} />
      </svg>
      <span dangerouslySetInnerHTML={{ __html: currentTime }} />
    </div>
  );
}
