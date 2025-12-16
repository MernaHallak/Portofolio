import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const NAV_OFFSET_PX = 120; // نفس القيمة (عدّليها إذا لزم)

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // إذا في hash: انزلي للقسم مع تعويض navbar
    if (hash) {
      const id = hash.replace("#", "");
      // تأخير بسيط لتأكد DOM جاهز
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

    // بدون hash: رجّع لأول الصفحة عند تغيير المسار
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);

  return null;
}
