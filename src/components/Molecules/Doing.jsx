import React from "react";

export const getActivity = (time, isPm, isWeekend) => {
  const actualTime = Number(time);
  if (!isPm) {
    switch (actualTime) {
      case 12:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
        return "sleeping 😴";
      case 8:
        return "having breakfast ☕";
      case 9:
      case 10:
      case 11:
        return isWeekend ? "available 👋" : "working 👨‍💻";
      default:
        return "available 👋";
    }
  } else {
    switch (actualTime) {
      case 1:
        return "having lunch 🍱";
      case 12:
      case 2:
      case 3:
      case 4:
      case 5:
        return isWeekend ? "available 👋" : "working 👨‍💻";
      case 8:
        return "having dinner 🍽️";
      case 11:
        return "reading 📖";
      default:
        return "available 👋";
    }
  }
};

export const Doing = ({ time, isPm, isWeekend }) => {
  return (
    <span className="doing">
      I&apos;m likely {getActivity(time, isPm, isWeekend)}
      {"."}
    </span>
  );
};
