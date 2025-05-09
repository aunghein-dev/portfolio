import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Smooth scroll to top on route change
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Also handle scroll to top on clicking the same link
    const handleSamePageLinkClick = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Attach listener for same-page anchor clicks
    window.addEventListener("same-page-click", handleSamePageLinkClick);

    return () => {
      window.removeEventListener("same-page-click", handleSamePageLinkClick);
    };
  }, [pathname]);

  return null;
}
