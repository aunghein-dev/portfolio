import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { NavData } from "./data/Navbar.data.js";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link className="site-title" to="/">
        <span className="flex align-center px-2 py-1">Aung Hein</span>
      </Link>
      <ul className="nav-links">
        {NavData.map((item) => (
          <CustomLink
            key={item.id}
            to={item.path}
            style={{
              "--hover-color": item.tint,
              "--active-color": item.tint,
            }}
          >
            {item.title}
          </CustomLink>
        ))}
      </ul>
    </nav>
  );
}

/*
function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
*/
function CustomLink({ to, children, style = {}, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isBlogBase = to === "/blog";

  const isActive = useMatch({
    path: isBlogBase ? "/blog/*" : resolvedPath.pathname,
    end: !isBlogBase,
  });

  return (
    <li className={isActive ? "active" : ""} style={style}>
      <Link
        to={to}
        className="transition-colors duration-200"
        style={{
          color: isActive ? "var(--active-color)" : undefined,
        }}
        {...props}
      >
        {children}
      </Link>
    </li>
  );
}
