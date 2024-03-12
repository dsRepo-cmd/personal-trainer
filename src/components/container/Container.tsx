import { FC, ReactNode } from "react";
import "./Container.css";

interface ContainerProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

const Container: FC<ContainerProps> = ({ children, className = "" }) => {
  return <div className={`contain ${className} sm:p-1`}>{children}</div>;
};

export default Container;
