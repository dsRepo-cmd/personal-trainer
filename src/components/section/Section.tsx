import { FC, ReactNode } from "react";

export type BackgroundColor = "white" | "black" | "red";

interface SectionProps {
  children: ReactNode;
  id?: string;
  backgroundColor?: BackgroundColor;
  doubleLine?: boolean;
}

const Section: FC<SectionProps> = ({
  children,
  id,
  backgroundColor = "black",
  doubleLine,
}) => {
  const classMap: { [key in BackgroundColor]: string } = {
    black: "container-dark",
    white: "container-white ",
    red: "container-red  ",
  };

  const mod = classMap[backgroundColor];

  return (
    <section
      id={id}
      className={`flex flex-col  items-center justify-center  w-[100%] ${mod}`}
    >
      <div className="container flex items-center justify-center my-[100px] mx-20 md:my[36px]">
        {children}
      </div>

      {doubleLine && (
        <div className=" relative w-full h-1 bg-[#ff4739]">
          <span className=" absolute w-1/2 h-full bg-[#62dc42] "></span>
        </div>
      )}
    </section>
  );
};

export default Section;
