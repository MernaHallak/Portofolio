import { useEffect, useState } from "react";

const NAV_OFFSET_PX = 120; // عدّليها إذا Navbar أعلى/أقل

export default function useActiveSection(sectionIds = []) {
  const [activeId, setActiveId] = useState(sectionIds[0] || "hero");

  useEffect(() => {
    if (!sectionIds?.length) return;

    let raf = 0;

    const getActive = () => {
      const y = window.scrollY + NAV_OFFSET_PX;

      // نختار آخر section صار فوق (y)
      let current = sectionIds[0] || "hero";

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.offsetTop <= y) current = id;
      }

      setActiveId((prev) => (prev === current ? prev : current));
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(getActive);
    };

    // أول تحديد
    getActive();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [sectionIds.join("|")]);

  return activeId;
}
