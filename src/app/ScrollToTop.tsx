"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Scroll to top on page load/refresh and route changes
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    
    // Handle hash links - scroll to top first, then to hash if present
    const handleHashChange = () => {
      if (window.location.hash) {
        // Small delay to ensure page is rendered
        setTimeout(() => {
          const element = document.querySelector(window.location.hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      }
    };

    // Handle initial load
    handleHashChange();

    // Handle browser back/forward navigation
    const handlePopState = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      handleHashChange();
    };
    
    window.addEventListener("popstate", handlePopState);
    window.addEventListener("hashchange", handleHashChange);
    
    return () => {
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [pathname]);

  return null;
}
