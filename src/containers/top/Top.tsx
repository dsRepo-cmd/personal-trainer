import { motion } from "framer-motion";
import { ImagesSlider } from "../../components/imageSlider/imageSlider";
import { FaAngleDoubleDown } from "react-icons/fa";
import LogoIcon from "../../assets/logo.png";
import "./Top.css";

const images = [
  "https://picsum.photos/1920/640?image=960",
  "https://picsum.photos/1920/640?image=961",
  "https://picsum.photos/1920/640?image=962",
];
function Top() {
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
    <div id="welcome" className=" relative">
      <ImagesSlider className="h-[40rem]" images={images}>
        <motion.div
          initial={{
            opacity: 0,
            y: -80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="z-50 flex flex-col justify-center items-center"
        >
          <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50  to-black py-4">
            <img src={LogoIcon} alt="Feel Fit | Personal trainers" />
          </motion.p>
        </motion.div>
      </ImagesSlider>
      <div className=" flex items-center">
        <a
          className=" wellcome_down_button z-50"
          onClick={() => handleNavClick("navbar-top")}
          href="#navbar-top"
        >
          <FaAngleDoubleDown className="wellcome_down_icon" size={24} />
        </a>
      </div>
    </div>
  );
}

export default Top;
