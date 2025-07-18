import ThemeButton from "../../typography/ThemeButton";
export default function MoreAboutMe() {
  return (
    /* <Link
      to="/about"
      className="flex items-center gap-1 px-3.5 py-3 text-sm bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-md transition-all ease-in-out duration-200"
      style={{ color: "var(--color-accent)" }}
    >
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
      </svg>
      <span>More About Me</span>
    </Link>
    */
    <ThemeButton
      to="/about"
      title="More About Me"
      icon={
        <svg viewBox="0 0 24 24">
          <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
        </svg>
      }
    >
      More About Me
    </ThemeButton>
  );
}
