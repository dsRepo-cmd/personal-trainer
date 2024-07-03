import { Skin } from "../../data/classes";
import { cn } from "../../lib/cn";
import Text from "../text/Text";

type SkinVariant = "bg-secondary" | "bg-primary ";

interface SkinItemProps {
  skin: Skin;
  className?: string;
  variant?: SkinVariant;
}

const SkinItem: React.FC<SkinItemProps> = ({
  skin,
  className = "",
  variant = "bg-primary ",
}) => {
  return (
    <div
      data-aos="zoom-in"
      className={cn("relative p-[2px] border border-[#e4e4e4] ", className)}
    >
      <div className="absolute flex items-start flex-col bottom-12 gap-1">
        <Text
          className=" bg-dark text-white px-2 py-3 text-start font-primary uppercase font-bold"
          text={skin.title}
        />

        <Text
          className={cn(" text-[0.8rem] text-start  text-white p-3 ", variant)}
          text={skin.subtitle}
        />
      </div>
      <img
        className=" w-full h-full object-cover"
        src={skin.img}
        alt={skin.title}
      />

      <div
        className={cn(
          "flex flex-col overflow-hidden w-full h-full absolute top-0 right-0 opacity-0 p-6 duration-300 hover:opacity-100 z-20 ",
          variant
        )}
      >
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
