import React from "react";

const ActionButton = ({
  type = "button",
  title,
  label = "Share",
  url,
  additionalClasses = "",
}) => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title || "Check this out!",
          text:  "Check out this content! @aunghein",
          url: url || window.location.href,
        });
        //console.log("✅ Shared successfully");
        // Optionally show a toast here
      } catch (error) {
        if (error.name === "AbortError") {
          // User canceled the share – no need to show error
          // console.log("ℹ️ Share was canceled by the user.");
        } else {
          //  console.error("❌ Error sharing:", error);
          // Optionally show a toast or alert
        }
      }
    } else {
      // console.log("❌ Web Share API not supported in this browser.");
      // Fallback UI can go here (like a modal with manual copy options)
    }
  };

  const ShareIcon = () => (
    <svg
      viewBox="0 0 24 24"
      role="presentation"
      className="w-5 h-5 fill-current"
      aria-hidden="true"
    >
      <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7a2.89 2.89 0 000-1.4l7.13-4.15A2.98 2.98 0 0018 8a3 3 0 100-6 3 3 0 00-3 3c0 .24.04.47.09.7L7.96 9.81A3.007 3.007 0 006 9a3 3 0 100 6c.79 0 1.5-.31 2.04-.81l7.13 4.15c-.05.23-.08.46-.08.7a3 3 0 103-3z" />
    </svg>
  );

  return (
    <div className="flex justify-end">
      {type === "link" && url ? (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          title={title}
          aria-label={label}
          className={`inline-flex items-center gap-2 text-[var(--color-primary-txt)] ${additionalClasses}`}
        >
          <ShareIcon />
          <span>{label}</span>
        </a>
      ) : (
        <button
          type="button"
          title={title}
          aria-label={label}
          onClick={handleShare}
          className={`inline-flex items-center justify-end gap-2 
                      px-4 py-3 rounded-md 
                      bg-[var(--color-surface)] 
                      hover:bg-[var(--color-surface-variant)] 
                      text-[var(--color-accent)] 
                      text-sm transition-all 
                      ease-in-out duration-200 
                      ${additionalClasses}`}
        >
          <ShareIcon />
          <span>{label}</span>
        </button>
      )}
    </div>
  );
};

export default ActionButton;
