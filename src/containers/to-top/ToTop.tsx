import { useEffect, useState, useCallback } from "react";
import { cn } from "../../lib/cn";
import ArrowUp from "../../assets/arrow-up.svg";
const ToTop = () => {
  const [isActive, setActive] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollPos = window.scrollY;
    const windowHeight = window.innerHeight / 4;
    setActive(scrollPos >= windowHeight);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <button
      aria-label="Scroll to top"
      title="Scroll to top"
      id="to-top"
      className={cn(
        "fixed bottom-[-36px] right-[36px] z-50 flex items-center justify-center h-[29px] w-[29px] cursor-pointer duration-300 rounded-sm text-white bg-dark hover:opacity-70",
        isActive && "bottom-4"
      )}
      onClick={scrollToTop}
    >
      <ArrowUp width={13} height={13} className=" text-white" />
    </button>
  );
};

export default ToTop;
