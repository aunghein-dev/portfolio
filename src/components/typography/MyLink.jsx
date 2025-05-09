import { Link } from "react-router-dom";
const MyLink = ({
  name,
  to,
  title,
  data,
  aria,
  target,
  rel,
  children,
  className = "",
  underline = true,
}) => {
  const isExternal = target === "_blank";
  const underlineClass = underline ? "underline" : "";

  return (
    <Link
      to={to}
      title={title || name}
      {...(data && { "data-umami-event": data })}
      {...(aria && { "aria-label": aria })}
      {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
      className={`
        font-[400]
        leading-relaxed
        inline-block text-[var(--color-accent-hover)]  
        hover:underline 
        hover:text-[var(--color-accent)]
        decoration-[var(--color-divider)]
        hover:decoration-[var(--color-accent)] 
        decoration-[0.15rem]
        self-start transition-colors ${underlineClass}
        underline-offset-[0.15rem] ${className}`}
    >
      {children || name}
    </Link>
  );
};

export default MyLink;
