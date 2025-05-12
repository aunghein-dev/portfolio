import { useState } from "react";

export default function SkillBadge({ name, icon, tint }) {
  const [r, g, b] = tint.split(" ");
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <li
      className={`flex items-center gap-2 text-[0.85rem] rounded-md px-4 py-2 border transition-all duration-300 cursor-pointer`}
      style={{
        backgroundColor: "rgba(34, 62, 128, 0.1)",

        borderColor: "rgba(235, 240, 251, 0.18)",
        ...(isHovered
          ? {
              backgroundColor: `rgba(${r},${g},${b},0.48)`,
              borderColor: `rgb(${r},${g},${b})`,
              boxShadow: `0 0 8px rgba(${r},${g},${b},0.25)`,
            }
          : {}),
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="text-sm">{icon}</span>
      {name}
    </li>
  );
}
