import { Skin } from "../../data/classes";
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
  className,
  variant = "skin_primary",
}) => {
  return (
    <div className={`${className}  skin`}>
      <div className="skin_title_wrapper">
        <Text
          align="text-start"
          fontFamily="Montserrat"
          size="m"
          uppercase
          bold
          className="skin_title"
          text={skin.title}
        />

        <Text
          align="text-start"
          className={`text-[0.8rem]  text-white p-3 ${variant}`}
          text={skin.subtitle}
        />
      </div>
      <img className="skin_img" src={skin.img} alt={skin.title} />

      <div className={`skin_paragraph_wrapper  ${variant} `}>
        {skin.paragraphs.map((paragraph, index) => (
          <Text
            key={index}
            align="text-start"
            className=" text-[0.8rem] mb-3 text-white overflow-hidden overflow-ellipsis "
            text={paragraph}
          />
        ))}
      </div>
    </div>
  );
};

export default SkinItem;
