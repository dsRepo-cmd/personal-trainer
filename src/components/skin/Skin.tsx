import { Skin } from "../../data/classes";
import Text from "../text/Text";
import "./Skin.css";

type SkinVariant = "bg-[#ff4739]" | "bg-[#62dc42]";

interface SkinItemProps {
  skin: Skin;
  className?: string;
  variant?: SkinVariant;
}

const SkinItem: React.FC<SkinItemProps> = ({
  skin,
  className,
  variant = "bg-[#62dc42]",
}) => {
  return (
    <div className={`${className}  relative skin-border`}>
      <div className=" items-start title-wrapper">
        <Text
          align="text-start"
          fontFamily="Montserrat"
          size="m"
          uppercase
          className={` font-bold uppercase text-white py-2 px-3 bg-[#1a1a1a] `}
          text={skin.title}
        />

        <Text
          align="text-start"
          className={`text-[0.8rem]  text-white p-3 ${variant}`}
          text={skin.subtitle}
        />
      </div>
      <img className="img" src={skin.img} alt={skin.title} />

      <div
        className={`paragraph-wrapper duration-400 flex flex-col gap-3  ${variant}`}
      >
        {skin.paragraphs.map((paragraph, index) => (
          <div key={index}>
            <Text
              align="text-start"
              className=" text-[0.8rem] text-white "
              text={paragraph}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkinItem;
