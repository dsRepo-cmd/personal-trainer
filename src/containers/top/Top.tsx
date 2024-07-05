import { motion } from "framer-motion";
import { FaAngleDoubleDown } from "react-icons/fa";
import { ImagesSlider } from "../../components/imageSlider/imageSlider";
import LogoIcon from "../../assets/logo.webp";
import { cn } from "../../lib/cn";

const images = ["/top-pool.webp", "/top-stairs.webp", "/top-view.webp"];
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
    <div
      id="welcome"
      className=" relative flex h-screen items-center justify-center bg-black"
    >
      <ImagesSlider className="h-screen" images={images}>
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
          aria-label="to navbar"
          className={cn(
            " group flex justify-center items-center w-16 h-16 border-2 border-secondary rounded-full ",
            " absolute bottom-[10%] left-1/2 translate-x-[-50%] z-50",
            " hover:border-primary "
          )}
          onClick={() => handleNavClick("navbar-top")}
          href="#navbar-top"
        >
          <FaAngleDoubleDown
            className=" duration-0 fill-secondary  group-hover:fill-primary"
            size={24}
          />
        </a>
      </div>
    </div>
  );
}

export default Top;
