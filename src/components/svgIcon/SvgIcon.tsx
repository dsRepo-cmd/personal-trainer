import sprite from "../../assets/sprite.svg";
import { IconId } from "../../lib/enums";

interface SvgIconProps {
  id?: string;
  className: string;
  size: string | number;
  iconId: IconId;
}

const SvgIcon = ({ id, className, iconId, size }: SvgIconProps) => {
  return (
    <svg id={id} className={className} width={size} height={size}>
      <use href={sprite + iconId} />
    </svg>
  );
};

export default SvgIcon;
