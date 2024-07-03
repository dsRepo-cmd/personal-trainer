import { Skin } from "../../data/classes";
import { cn } from "../../lib/cn";
import Text from "../text/Text";
import "./Skin.css";

type SkinVariant = "skin_secondary" | "skin_primary";

interface SkinItemProps {
  skin: Skin;
  className?: string;
  variant?: SkinVariant;
}

const SkinItem: React.FC<SkinItemProps> = ({
  skin,
  className = "",
  variant = "skin_primary",
}) => {
  return (
    <div data-aos="zoom-in" className={cn("skin", className)}>
      <div className="skin_title_wrapper">
        <Text
          className="skin_title text-start font-primary uppercase font-bold"
          text={skin.title}
        />

        <Text
          className={`text-[0.8rem] text-start  text-white p-3 ${variant}`}
          text={skin.subtitle}
        />
      </div>
      <img className="skin_img" src={skin.img} alt={skin.title} />

      <div className={`skin_paragraph_wrapper  ${variant} `}>
        {skin.paragraphs.map((paragraph, index) => (
          <Text
            key={index}
            className=" text-[0.8rem] mb-3 text-start text-white overflow-hidden overflow-ellipsis "
            text={paragraph}
          />
        ))}
      </div>
    </div>
  );
};

export default SkinItem;
