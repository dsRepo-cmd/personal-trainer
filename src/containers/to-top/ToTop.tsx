import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { Variant } from "../../lib/types";
import "./ToTop.css";

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
      className={`to-top ${isActive ? "to_top-active" : ""}`}
      href="#"
      onClick={scrollToTop}
    >
      <IoIosArrowUp size={13} />
    </a>
  );
};

export default ToTop;
