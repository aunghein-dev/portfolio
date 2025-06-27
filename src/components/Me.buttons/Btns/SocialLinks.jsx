import clsx from "clsx";
import SocialData from "../../../data/SocialLinks.data";

const socialLinks = SocialData;

export default function SocialLinks({ extended = "" }) {
  const Format = () =>
    extended === "" ? (
      <ul className="flex gap-1.5 flex-row items-center">
        {socialLinks.map(({ href, title, icon, hocusColor }) => (
          <li key={title}>
            <a
              href={href}
              title={title}
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(
                "font-medium flex items-center justify-center min-h-10 min-w-10 p-1.5 rounded-md no-underline transition-all",
                "bg-transparent text-[var(--color-primary-txt)]",
                hocusColor
              )}
            >
              {icon}
            </a>
          </li>
        ))}
      </ul>
    ) : (
      <ul className="flex flex-col gap-1.5 items-start group w-[340px]">
        {socialLinks.map(({ href, title, icon, hocusColor, userName, src }) => (
          <li key={title} className="w-full">
            <a
              href={href}
              title={title}
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(
                "flex items-center justify-between w-full h-[46px] px-4 rounded-md no-underline transition-all",
                "text-neutral-800 dark:text-[var(--color-primary-txt)]",
                hocusColor
              )}
            >
              <div className="flex items-center gap-2">
                {icon}
                <span className="text-sm font-medium">{src}</span>
              </div>
              <span className="text-sm text-neutral-600 dark:text-[var(--color-secondary-txt)] font-light">
                {userName}
              </span>
            </a>
            <div className="h-[1px] bg-neutral-300 dark:bg-[var(--color-divider)] group-hover:bg-transparent transition-colors duration-300"></div>
          </li>
        ))}
      </ul>
    );
  return <Format />;
}
