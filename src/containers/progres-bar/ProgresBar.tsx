import { motion, useScroll } from "framer-motion";

function ProgresBar() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className=" fixed top-0 left-0 right-0 h-2 bg-secondary origin-[0%] z-50"
      style={{ scaleX: scrollYProgress }}
    />
  );
}

export default ProgresBar;
