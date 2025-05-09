import { Link } from "react-router-dom";

export default function FirstColLinks() {
  return (
    <div className="flex flex-col gap-4 tablet-sm:row-span-2 text-[0.85rem] leading-relaxed">
      <p
        className="font-[400] text-[0.85rem] uppercase 
                   tracking-wider
                   select-none"
      >
        Navigate
      </p>

      <ul
        title="Navigation links"
        aria-label="Navigation links"
        className="flex flex-col gap-4"
      >
        {[
          { label: "Home", to: "/", color: "#38BDF8" },
          { label: "About", to: "/about", color: "#34D399" },
          { label: "Blog", to: "/blog", color: "#FB923C" },
          { label: "Projects", to: "/projects", color: "#9D8BFA" },
        ].map((item, index) => (
          <li key={index}>
            <Link
              to={item.to}
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
          </li>
        ))}
      </ul>
    </div>
  );
}
