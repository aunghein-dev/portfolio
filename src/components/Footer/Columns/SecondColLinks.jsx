import { Link } from "react-router-dom";

export default function SecondColLinks() {
  const links = [
    {
      label: "Get in Touch",
      href: "/contact",
      color: "#34D399",
    },
    {
      label: "RSS Feed",
      href: "/feed.xml",
      color: "#FB923C",
    },
    {
      label: "Colophon",
      href: "/colophon",
      color: "#A78BFA",
    },
    {
      label: "Scroll to Top",
      color: "#38BDF8",
      onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
    },
  ];

  return (
    <div className="flex flex-col gap-4 tablet-sm:row-span-2 text-[0.85rem] leading-relaxed">
      <p
        className="font-[400] text-[0.85rem] uppercase 
                   tracking-wider 
                   select-none"
      >
        Misc
      </p>

      <ul className="flex flex-col gap-4">
        {links.map((item, index) => (
          <li key={index}>
            {item.href === "/feed.xml" ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                title={item.label}
                className={`inline-block font-manrope text-[0.85rem] text-tertiary-txt 
                  transition-colors duration-300 ease-in-out 
                  hover:underline hover:underline-offset-[0.15rem]
                  decoration-[0.15rem]
                  hover:brightness-125 hover:text-shadow`}
                style={{ transitionProperty: "color", color: "inherit" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = item.color)}
                onMouseLeave={(e) => (e.currentTarget.style.color = "")}
              >
                {item.label}
              </a>
            ) : item.onClick ? (
              <button
                onClick={item.onClick}
                title={item.label}
                className={`inline-block font-manrope text-[0.85rem] text-tertiary-txt 
                  transition-colors duration-300 ease-in-out 
                  hover:underline hover:underline-offset-[0.15rem]
                  decoration-[0.15rem]
                  hover:brightness-125 hover:text-shadow`}
                style={{ transitionProperty: "color", color: "inherit" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = item.color)}
                onMouseLeave={(e) => (e.currentTarget.style.color = "")}
              >
                {item.label}
              </button>
            ) : (
              <Link
                to={item.href}
                title={item.label}
                className={`inline-block font-manrope text-[0.85rem] text-tertiary-txt 
                  transition-colors duration-300 ease-in-out 
                  hover:underline hover:underline-offset-[0.15rem]
                  decoration-[0.15rem]
                  hover:brightness-125 hover:text-shadow`}
                style={{ transitionProperty: "color", color: "inherit" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = item.color)}
                onMouseLeave={(e) => (e.currentTarget.style.color = "")}
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
