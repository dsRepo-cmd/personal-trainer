import { FC, ReactNode } from "react";
import "./Section.css";
import { Variant } from "../../lib/types";

interface SectionProps {
  children: ReactNode;
  id?: string;
  variant?: Variant;
  doubleLine?: boolean;
  className?: string;
  thin?: boolean;
}

const Section: FC<SectionProps> = ({
  children,
  id,
  variant = "dark",
  doubleLine,
  className,
  thin,
}) => {
  const classMap: { [key in Variant]: string } = {
    dark: "container-dark",
    white: "container-white",
    primary: "container-primary ",
    secondary: "container-secondary ",
  };

  const mod = classMap[variant];

  return (
    <section
      id={id}
      className={`sel flex flex-col  items-center justify-center  w-[100%]  ${mod}`}
    >
      {doubleLine && (
        <div className=" double_line_start">
          <span className="double_line_end "></span>
        </div>
      )}
      <div
        className={`container flex items-center justify-center ${
          thin ? "my-[20px]" : "my-[86px]"
        } mx-20 md:my[36px] ${className}`}
      >
        {children}
      </div>
    </section>
  );
};

export default Section;
