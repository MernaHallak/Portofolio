import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const NAV_OFFSET_PX = 120;

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    
    if (hash) {
      const id = hash.replace("#", "");
    
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET_PX;
          window.scrollTo({ top, left: 0, behavior: "smooth" });
        } else {
          window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        }
      }, 0);
      return;
    }

    
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);

  return null;
}
