import { cn } from "../../lib/cn";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className = "" }: ContainerProps) => {
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
