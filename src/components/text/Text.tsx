export type TextAlign = "text-left" | "text-right" | "text-center";

interface TextProps {
  text?: string;
  title?: string;
  align?: TextAlign;
  bold?: boolean;
  uppercase?: boolean;
  className?: string;
}

const Text: React.FC<TextProps> = ({
  text,
  title,
  align = "text-center",
  className,
}: TextProps) => {
  return (
    <div className={` flex ${align}  `}>
      {title && <h2 className={` text-3xl ${className} `}>{title}</h2>}

      {text && <p className={` ${className} `}>{text}</p>}
    </div>
  );
};

export default Text;
