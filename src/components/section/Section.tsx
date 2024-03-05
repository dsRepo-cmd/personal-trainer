import { FC, ReactNode } from "react";

export type BackgroundColor = "white" | "black" | "red";

interface SectionProps {
  children: ReactNode;
  id?: string;
  backgroundColor?: BackgroundColor;
}

const Section: FC<SectionProps> = ({
  children,
  id,
  backgroundColor = "black",
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
      className={`flex  items-center justify-center  w-[100%] ${mod}`}
    >
      <div className="container flex items-center justify-center my-[100px] mx-20">
        {children}
      </div>
    </section>
  );
};

export default Section;
