import { FC, ReactNode } from "react";
import "./Section.css";
import { Variant } from "../../lib/types";

interface SectionProps {
  children: ReactNode;
  id?: string;
  backgroundColor?: Variant;
  doubleLine?: boolean;
  className?: string;
}

const Section: FC<SectionProps> = ({
  children,
  id,
  backgroundColor = "dark",
  doubleLine,
  className,
}) => {
  const classMap: { [key in Variant]: string } = {
    dark: "container-dark",
    white: "container-white ",
    primary: "container-primary  ",
    secondary: "container-secondary ",
  };

  const mod = classMap[backgroundColor];

  return (
    <section
      id={id}
      className={`sel flex flex-col  items-center justify-center  w-[100%]  ${mod}`}
    >
      {doubleLine && (
        <div className=" relative w-full h-1 bg-[#ff4739]">
          <span className=" absolute w-1/2 h-full bg-[#62dc42] "></span>
        </div>
      )}
      <div
        className={`container flex items-center justify-center my-[86px] mx-20 md:my[36px] ${className}`}
      >
        {children}
      </div>
    </section>
  );
};

export default Section;
