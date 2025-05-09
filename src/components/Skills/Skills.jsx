import React from "react";
import SkillBadge from "./SkillBadge";
import MySubHeading from "../typography/MySubHeading";
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiSpringboot,
  SiMysql,
  SiMongodb,
  SiDocker,
  SiGit,
  SiGithub,
  SiVite,
} from "react-icons/si";
import { FaJava } from "react-icons/fa"; // Java is not in Si*, so we use Fa*

const skills = [
  { name: "TypeScript", tint: "0 104 255", icon: <SiTypescript /> }, // TypeScript blue
  { name: "JavaScript", tint: "247 223 30", icon: <SiJavascript /> }, // JavaScript yellow
  { name: "React", tint: "97 219 251", icon: <SiReact /> }, // React blue
  { name: "HTML", tint: "227 76 38", icon: <SiHtml5 /> }, // HTML5 orange
  { name: "CSS", tint: "38 77 228", icon: <SiCss3 /> }, // CSS blue
  { name: "Tailwind", tint: "56 189 248", icon: <SiTailwindcss /> }, // Tailwind blue
  { name: "Java", tint: "244 123 44", icon: <FaJava /> }, // Java brownish orange
  { name: "Spring Boot", tint: "6 132 61", icon: <SiSpringboot /> }, // Spring Boot green
  { name: "NodeJS", tint: "139 197 63", icon: <SiNodedotjs /> }, // Node.js green
  { name: "MySQL", tint: "0 117 143", icon: <SiMysql /> }, // MySQL blue
  { name: "MongoDB", tint: "76 175 80", icon: <SiMongodb /> }, // MongoDB green
  { name: "Docker", tint: "0 123 255", icon: <SiDocker /> }, // Docker blue
  { name: "Git", tint: "240 80 51", icon: <SiGit /> }, // Git red-orange
  { name: "GitHub", tint: "252 109 35", icon: <SiGithub /> }, // GitHub black
  { name: "Vite", tint: "100 108 255", icon: <SiVite /> }, // Vite blue
];

export default function Skills() {
  return (
    <div>
      <MySubHeading color="var(--color-primary-txt)">Skills</MySubHeading>
      <ul className="flex items-center gap-2.5 flex-wrap mt-6">
        {skills.map((skill) => (
          <SkillBadge
            key={skill.name}
            name={skill.name}
            tint={skill.tint}
            icon={skill.icon}
          />
        ))}
      </ul>
    </div>
  );
}
