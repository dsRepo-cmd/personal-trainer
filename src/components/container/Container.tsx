import { FC, ReactNode } from "react";
import { cn } from "../../lib/cn";

interface ContainerProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

const Container: FC<ContainerProps> = ({ children, className = "" }) => {
  return (
    <div
      className={cn(
        "flex flex-col justify-center items-center gap-10 w-full  sm:p-1",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
