import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import type { Variant } from "../../lib/types";
import { cn } from "../../lib/cn";

interface ContactProps {
  className?: string;
  variant?: Variant;
}

const ToTop: React.FC<ContactProps> = () => {
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const windowHeight = window.innerHeight / 4;

      if (scrollPos >= windowHeight) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <a
      aria-label="to-top"
      title="to top"
      id="to-top"
      className={cn(
        " fixed bottom-[-36px] right-[36px] z-50 flex items-center justify-center h-[29px] w-[29px] cursor-pointer duration-300 rounded-sm text-white  bg-dark hover:opacity-70 ",
        isActive ? " bottom-4" : ""
      )}
      href="#"
      onClick={scrollToTop}
    >
      <IoIosArrowUp size={13} />
    </a>
  );
};

export default ToTop;
