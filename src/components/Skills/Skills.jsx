import SkillBadge from "./SkillBadge";
import MySubHeading from "../typography/MySubHeading";
import {
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
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
import { FaJava, FaDatabase } from "react-icons/fa"; // Java is not in Si*

const skills = [
  { name: "TypeScript", tint: "0 104 255", icon: <SiTypescript /> }, // TypeScript blue
  { name: "JavaScript", tint: "247 223 30", icon: <SiJavascript /> }, // JavaScript yellow
  { name: "Next.js", tint: "0 112 243", icon: <SiNextdotjs /> }, // Next.js black
  { name: "React", tint: "97 219 251", icon: <SiReact /> }, // React blue
  { name: "React Native", tint: "0 122 255", icon: <SiReact /> }, // React Native with React icon (same icon, different color)
  { name: "HTML", tint: "227 76 38", icon: <SiHtml5 /> }, // HTML5 orange
  { name: "CSS", tint: "38 77 228", icon: <SiCss3 /> }, // CSS blue
  { name: "Tailwind", tint: "56 189 248", icon: <SiTailwindcss /> }, // Tailwind blue
  { name: "Java", tint: "244 123 44", icon: <FaJava /> }, // Java brownish orange
  { name: "Spring Boot", tint: "6 132 61", icon: <SiSpringboot /> }, // Spring Boot green
  { name: "NodeJS", tint: "139 197 63", icon: <SiNodedotjs /> }, // Node.js green
  { name: "Express.js", tint: "94 141 49", icon: <SiNodedotjs /> }, // Express.js (Node.js icon with custom tint)
  { name: "MySQL", tint: "0 117 143", icon: <SiMysql /> }, // MySQL blue
  { name: "MongoDB", tint: "76 175 80", icon: <SiMongodb /> }, // MongoDB green
  { name: "Docker", tint: "0 123 255", icon: <SiDocker /> }, // Docker blue
  { name: "Git", tint: "240 80 51", icon: <SiGit /> }, // Git red-orange
  { name: "GitHub", tint: "87 87 87", icon: <SiGithub /> }, // GitHub black
  { name: "Vite", tint: "100 108 255", icon: <SiVite /> }, // Vite blue
  { name: "PostgreSQL", tint: "0 58 77", icon: <SiMysql /> }, // PostgreSQL (using MySQL icon as a placeholder, custom tint)
  { name: "T-SQL", tint: "0 51 153", icon: <FaDatabase /> }, // T-SQL with Database icon and custom tint
];

export default function Skills() {
  return (
    <div>
      <MySubHeading color="var(--color-primary-txt)">Skills</MySubHeading>
      <ul
        className="flex items-center gap-2.5 flex-wrap mt-6
        text-[var(--color-badge)]"
      >
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
