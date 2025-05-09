import { Link } from "react-router-dom";

const ThemeButton = ({
  to = "/",
  children,
  icon = null,
  className = "",
  style = {},
  title = "",
  target = "",
  rel = "",
}) => {
  return (
    <Link
      to={to}
      title={title}
      target={target}
      rel={rel}
      className={`flex items-center gap-1 px-3.5 py-3 text-sm 
        bg-[var(--color-surface)] hover:bg-[var(--color-surface-variant)] 
        rounded-md transition-all ease-in-out duration-200 ${className}`}
      style={{ color: "var(--color-accent)", ...style }}
    >
      {icon && <span className="w-4 h-4 fill-current">{icon}</span>}
      <span>{children}</span>
    </Link>
  );
};

export default ThemeButton;
