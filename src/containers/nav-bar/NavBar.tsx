import { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";
import { nav } from "../../data/navigation";
import Text from "../../components/text/Text";
import "./NavBar.css";

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
    const navElement = document.querySelector(".nav-app");
    console.log(navElement);

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
        className={`flex items-center flex-col justify-center h-[82px] w-[100%] bg-[#0c0c0c] ${
          isFixed ? "fixed top-0 z-50" : "relative"
        } md:items-start`}
      >
        <button
          onClick={() => toggleNav(null)}
          className="navbar_button group hidden md:flex gap-5 items-center p-3 hover:bg-[#181818] w-full"
        >
          <HiMenu className="navbar_title  uppercase mb-[2px]" size={25} />

          <Text
            uppercase
            fontFamily="Montserrat"
            className="navbar_title text-[18px] "
            text="Personal trainer"
          />
        </button>

        <div
          className={`flex justify-center h-full items-center ${
            !isOpen ? "md:flex" : "md:left-[0]"
          } md:flex-col md:absolute m-auto md:top-[82px] md:left-[-100%] md:h-auto md:w-[100%] md:bg-[#0c0c0c]`}
        >
          {nav.map((elem) => (
            <a
              onClick={() => handleNavClick(elem.name)}
              key={elem.id}
              className={` navbar_link group  md:p-6 px-10 hover:bg-[#181818] md:border md:border-[#2a2a2a] md:border-solid ${
                elem.name === activeIndex && "bg-[#181818]"
              }`}
              href={`#${elem.path}`}
            >
              <Text
                uppercase
                bold
                className={` navbar_link_text text-[15px]  group-hover:text-[#62dc42]  xl:text-[12px] ${
                  elem.name === activeIndex && "navbar_link_text-active "
                } `}
                text={elem.name}
              />
            </a>
          ))}
        </div>
      </nav>
      {isFixed && <div className="nav-back pb-[82px]"></div>}
    </>
  );
}

export default NavBar;
