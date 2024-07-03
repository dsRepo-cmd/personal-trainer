import { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";
import { nav } from "../../data/navigation";
import Text from "../../components/text/Text";
import "./NavBar.css";
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
          "navbar_conatiner md:items-start",
          isFixed ? "fixed top-0 z-50" : "relative"
        )}
      >
        <button
          onClick={() => toggleNav(null)}
          className="duration-200 hidden  text-white w-full gap-5 navbar_button group  md:flex "
        >
          <HiMenu className="navbar_title  uppercase mb-[2px]" size={25} />

          <Text
            className="navbar_title uppercase font-primary text-white text-[18px] "
            text="Personal trainer"
          />
        </button>

        <div
          className={`flex justify-center h-full items-center navbar_item ${
            !isOpen ? "md:flex" : "md:left-[0]"
          } md:flex-col md:absolute m-auto md:top-[82px] md:left-[-100%] md:h-auto md:w-[100%] md:bg-[#0c0c0c]`}
        >
          {nav.map((elem) => (
            <a
              onClick={() => handleNavClick(elem.name)}
              key={elem.id}
              aria-label={elem.name}
              className={` navbar_link group  md:p-6 px-10 hover:bg-[#181818] md:border md:border-[#2a2a2a] md:border-solid ${
                elem.name === activeIndex && "bg-[#181818]"
              }`}
              href={`#${elem.path}`}
            >
              <Text
                className={` navbar_link_text uppercase font-bold xl:text-[12px] ${
                  elem.name === activeIndex && "navbar_link_text-active "
                } `}
                text={elem.name}
              />
            </a>
          ))}
        </div>
      </nav>
      {isFixed && <div className="nav-back"></div>}
    </>
  );
}

export default NavBar;
