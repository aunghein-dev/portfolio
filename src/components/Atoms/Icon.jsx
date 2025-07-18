import PropTypes from "prop-types";
import clsx from "clsx";

export const Icon = ({ path, className, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    role="presentation"
    className={clsx("size-6 fill-inherit", className)}
    aria-hidden="true"
    {...props}
  >
    <path className="fill-current" d={path} />
  </svg>
);

Icon.propTypes = {
  path: PropTypes.string.isRequired,
  className: PropTypes.string,
};
