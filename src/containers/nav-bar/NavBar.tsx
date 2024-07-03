import { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";
import { nav } from "../../data/navigation";
import { cn } from "../../lib/cn";

function NavBar() {
  const [isFixed, setIsFixed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<string | null>(null);

  useEffect(() => {
    function handleScroll() {
      const scrollPos = window.scrollY + 1;
      const windowHeight = window.innerHeight;
      const navbarHeight = isFixed ? 82 : 0;

      nav.forEach((elem) => {
        const element = document.getElementById(elem.path);

        if (element) {
          const elementTop =
            element.getBoundingClientRect().top + window.scrollY;
          const elementBottom = elementTop + element.offsetHeight;

          if (
            elementTop - navbarHeight <= scrollPos &&
            elementBottom - navbarHeight > scrollPos
          ) {
            setActiveIndex(elem.name);
          }
        }
      });

      if (scrollPos >= windowHeight) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isFixed]);

  const toggleNav = (name: string | null) => {
    setIsOpen(!isOpen);
    setActiveIndex(name === activeIndex ? null : name);
  };

  const scrollToAnchor = (anchor: string) => {
    const element = document.getElementById(anchor);

    if (element) {
      const navbarHeight = 82;

      const elementTop = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementTop - navbarHeight,
        behavior: "smooth",
      });
    }
  };

  const handleNavClick = (name: string) => {
    if (name) {
      toggleNav(name);
      setTimeout(() => {
        scrollToAnchor(name);
      }, 0);
    }
  };

  return (
    <>
      <nav
        id="navbar-top"
        className={cn(
          "flex flex-col items-center justify-center w-full h-[82px] bg-[#0c0c0c] ",
          "md:items-start",
          isFixed ? "fixed top-0 z-50" : "relative"
        )}
      >
        <button
          onClick={() => toggleNav(null)}
          className={cn(
            " hidden items-center  text-white w-full h-full gap-5  font-primary text-[18px] uppercase ",
            "hover:bg-[#181818] hover:text-primary",
            "md:flex "
          )}
        >
          <HiMenu className=" mb-[2px]" size={25} />
          Personal trainer
        </button>

        <div
          className={cn(
            "flex justify-center h-full items-center z-50",
            " md:flex-col md:absolute m-auto md:top-[82px] md:left-[-100%] md:h-auto md:w-[100%] md:bg-[#0c0c0c]",
            !isOpen ? "md:flex" : "md:left-[0]"
          )}
        >
          {nav.map((elem) => (
            <a
              onClick={() => handleNavClick(elem.name)}
              key={elem.id}
              aria-label={elem.name}
              className={cn(
                "flex items-center justify-center w-full h-full  px-10 uppercase font-bold text-white text-sm duration-300 ",
                "hover:text-primary hover:bg-[#181818]",
                "xl:text-[12px] md:p-6 md:border md:border-[#2a2a2a] md:border-solid",
                elem.name === activeIndex && "bg-[#181818] text-primary"
              )}
              href={`#${elem.path}`}
            >
              {elem.name}
            </a>
          ))}
        </div>
      </nav>
      {isFixed && <div className="  pb-[82px] "></div>}
    </>
  );
}

export default NavBar;
