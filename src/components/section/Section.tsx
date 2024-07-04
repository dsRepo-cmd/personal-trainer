import { FC, ReactNode } from "react";
import { Variant } from "../../lib/types";
import { cn } from "../../lib/cn";

interface SectionProps {
  children: ReactNode;
  id?: string;
  variant?: Variant;
  doubleLine?: boolean;
  className?: string;
  thin?: boolean;
}
const classMap: { [key in Variant]: string } = {
  dark: "bg-dark  text-white",
  white: "bg-white text-dark",
  primary: "bg-primary ",
  secondary: "bg-secondary selection:text-primary ",
};

const Section: FC<SectionProps> = ({
  children,
  id,
  variant = "dark",
  doubleLine,
  className = "",
  thin,
}) => {
  return (
    <section
      id={id}
      className={cn(
        "selection:text-white selection:bg-secondary flex flex-col  items-center justify-center  w-[100%] ",
        classMap[variant]
      )}
    >
      {doubleLine && (
        <div className=" relative w-full bg-secondary h-1">
          <span className=" absolute w-1/2 h-full bg-primary "></span>
        </div>
      )}
      <div
        className={cn(
          "container flex items-center justify-center  m-auto md:my[36px]",
          thin ? "my-[20px]" : "my-[74px]",
          className
        )}
      >
        {children}
      </div>
    </section>
  );
};

export default Section;
