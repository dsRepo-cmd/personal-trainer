import React, { FC, memo } from "react";

type SvgProps = Omit<React.SVGProps<SVGSVGElement>, "onClick">;

type VariantType = "error" | "normal";
interface IconBaseProps extends SvgProps {
  positioned?: boolean;
  Svg: FC<React.SVGProps<SVGSVGElement>>;
  title?: string;
  variant?: VariantType;
  filled?: boolean;
  className?: string;
}

interface NonClickableIconProps extends IconBaseProps {
  clickable?: false;
}

interface ClickableBaseProps extends IconBaseProps {
  clickable: true;
  onClick: () => void;
}

type IconProps = NonClickableIconProps | ClickableBaseProps;

export const Icon: FC<IconProps> = memo((props) => {
  const {
    Svg,
    width = 32,
    height = 32,
    clickable,
    className,
    title,

    ...otherProps
  } = props;

  const icon = (
    <Svg
      className={`${className}`}
      width={width}
      height={height}
      {...otherProps}
      onClick={undefined}
    />
  );

  if (clickable) {
    return (
      <button
        title={title}
        type="button"
        className={`${className}`}
        onClick={props.onClick}
        style={{ height, width }}
      >
        {icon}
      </button>
    );
  }

  return icon;
});
