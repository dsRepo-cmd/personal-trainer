import { FaAngleDoubleDown } from "react-icons/fa";
import HexagoneIcon from "../../assets/hexagone.svg";
import "./Welcome.css";

function Welcome() {
  const scrollToAnchor = (anchor: string) => {
    const element = document.getElementById(anchor);

    if (element) {
      const elementTop = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementTop,
        behavior: "smooth",
      });
    }
  };
  const handleNavClick = (name: string) => {
    if (name) {
      setTimeout(() => {
        scrollToAnchor(name);
      }, 0);
    }
  };

  return (
    <div id="welcome" className="relative w-full h-screen bg-[#191919]">
      <div className="absolute overflow-hidden w-full h-[620px] top-1/2 -mt-300 transform -translate-y-1/2 z-1">
        <div className="absolute w-[600px] h-[600px] left-1/2 ml-[-693px]  ">
          <div className=" absolute right-0 hover:opacity-50">
            <HexagoneIcon className="hexagone_icon_left " />
          </div>
          <div className=" absolute left-0 top-1/2 translate-y-[-50%] hover:opacity-50">
            <HexagoneIcon className="hexagone_icon_left " />
          </div>
          <div className="absolute  right-0 bottom-0 hover:opacity-50">
            <HexagoneIcon className="hexagone_icon_left " />
          </div>
        </div>

        <div className="absolute  w-[600px] h-[600px] right-1/2 transform translate-x-1/2 mr-[-400px] z-1 ">
          <div className=" absolute left-0 top-0 hover:opacity-50">
            <HexagoneIcon className="hexagone_icon_right" />
          </div>

          <div className="1 absolute right-0 translate-y-[50%] hover:opacity-50">
            <HexagoneIcon className="hexagone_icon_right">
              <img
                className="1234 w-full h-full"
                src="https://picsum.photos/650/400?random=1"
                alt=""
              />
            </HexagoneIcon>
          </div>
          <div className=" absolute left-0 bottom-0 hover:opacity-50">
            <HexagoneIcon className="hexagone_icon_right" />
          </div>
        </div>
      </div>
      <div className=" flex items-center">
        <a
          className="wellcome_down_button"
          onClick={() => handleNavClick("navbar-top")}
          href="#navbar-top"
        >
          <FaAngleDoubleDown className="wellcome_down_icon" size={24} />
        </a>
      </div>
    </div>
  );
}

export default Welcome;
