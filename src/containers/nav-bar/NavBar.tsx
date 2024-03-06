import { useEffect, useState } from "react";
import { nav } from "../../data/navigation";
import { HiMenu } from "react-icons/hi";
import Text from "../../components/text/Text";

function NavBar() {
  const [isFixed, setIsFixed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<string | null>(null);

  useEffect(() => {
    function handleScroll() {
      const scrollPos = window.scrollY;
      const windowHeight = window.innerHeight;

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
      const navbarHeight = isFixed ? 82 : 0;

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
      <header
        id="navbar-top"
        className={`flex items-center flex-col justify-center h-[82px] w-[100%] bg-[#0c0c0c] ${
          isFixed ? "fixed top-0 z-50" : "relative"
        } md:items-start`}
      >
        <button
          onClick={() => toggleNav(null)}
          className="border_dark cursor-pointer group transition-all duration-500 hidden md:flex gap-5 items-center p-3 hover:bg-[#181818] w-full"
        >
          <HiMenu
            className="container-dark group-hover:text-[#62dc42] uppercase mb-1"
            size={25}
          />

          <Text
            className="container-dark group-hover:text-[#62dc42] uppercase"
            text="Personal trainer"
          />
        </button>

        <div
          className={`flex justify-center h-full items-center ${
            !isOpen ? "md:flex" : "md:right-[0%]"
          } md:flex-col md:absolute m-auto md:top-[82px] md:right-[-100%] md:h-auto md:w-[100%] md:bg-[#0c0c0c]`}
        >
          {nav.map((elem) => (
            <a
              onClick={() => handleNavClick(elem.name)}
              key={elem.id}
              className={`uppercase group flex items-center justify-center w-full md:p-6 h-full transition-all duration-500 px-10 hover:bg-[#181818] md:border sm:border-[#2a2a2a] md:border-solid ${
                elem.name === activeIndex ? "bg-[#181818]" : ""
              }`}
              href={`#${elem.path}`}
            >
              <Text
                className={`text-xs font-bold group-hover:text-[#62dc42] uppercase ${
                  elem.name === activeIndex
                    ? "text-[#62dc42]"
                    : "text-[#ffffff]"
                }`}
                text={elem.name}
              />
            </a>
          ))}
        </div>
      </header>
      {isFixed && <div className=" mb-[82px] "> </div>}
    </>
  );
}

export default NavBar;
