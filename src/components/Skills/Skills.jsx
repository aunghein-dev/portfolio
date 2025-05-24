import SkillBadge from "./SkillBadge";
import MySubHeading from "../typography/MySubHeading";
import {
  SiPostgresql,
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiSpringboot,
  SiMysql,
  SiMongodb,
  SiDocker,
  SiGit,
  SiGithub,
  SiVite,
  SiPostman,
} from "react-icons/si";
import { FaJava, FaAws, FaDatabase } from "react-icons/fa";

const skills = [
  { name: "Next.js", tint: "0 112 243", icon: <SiNextdotjs /> },
  { name: "React", tint: "97 219 251", icon: <SiReact /> },
  { name: "Tailwind", tint: "56 189 248", icon: <SiTailwindcss /> },
  { name: "Vite", tint: "100 108 255", icon: <SiVite /> },

  { name: "TypeScript", tint: "0 104 255", icon: <SiTypescript /> },
  { name: "JavaScript", tint: "247 223 30", icon: <SiJavascript /> },
  { name: "HTML", tint: "227 76 38", icon: <SiHtml5 /> },
  { name: "CSS", tint: "38 77 228", icon: <SiCss3 /> },

  { name: "Spring Boot", tint: "6 132 61", icon: <SiSpringboot /> },
  { name: "Java", tint: "244 123 44", icon: <FaJava /> },
  { name: "Postman", tint: "255 89 0", icon: <SiPostman /> },

  { name: "MySQL", tint: "0 117 143", icon: <SiMysql /> },
  { name: "MongoDB", tint: "76 175 80", icon: <SiMongodb /> },
  { name: "PostgreSQL", tint: "51 102 145", icon: <SiPostgresql /> },
  { name: "T-SQL", tint: "0 51 153", icon: <FaDatabase /> },

  { name: "Docker", tint: "0 123 255", icon: <SiDocker /> },
  { name: "AWS", tint: "255 153 0", icon: <FaAws /> },
  { name: "Git", tint: "240 80 51", icon: <SiGit /> },
  { name: "GitHub", tint: "87 87 87", icon: <SiGithub /> },
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
