import { Icon } from "../../components/Atoms/Icon";
import { icons } from "../Icons/index.js";
import clsx from "clsx";

const Loading = ({ sm = false }) => (
  <div
    className={clsx(
      "flex flex-col w-full flex-1 items-center justify-center p-4",
      !sm ? "min-h-screen" : "h-full"
    )}
  >
    <Icon
      className="size-12 animate-spin text-[var(--color-accent)]"
      path={icons.loading}
    />
    <span className="sr-only">Loading...</span>
  </div>
);

export default Loading;
