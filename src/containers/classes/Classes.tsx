import { FC } from "react";
import Section from "../../components/section/Section";
import SkinItem from "../../components/skin/Skin";
import Text from "../../components/text/Text";
import { classes } from "../../data/classes";
import "./Classes.css";
import { Variant } from "../../lib/types";

const { skins } = classes;

interface ClassesProps {
  className?: string;
  variant?: Variant;
}

const Classes: FC<ClassesProps> = ({ variant = "dark" }) => {
  return (
    <Section id="classes" backgroundColor={variant}>
      <div className="flex flex-col w-full gap-10 items-center justify-center">
        <Text
          variant={variant}
          className=" uppercase"
          title={classes.title}
          size="xl"
          bold
        />

        <div className="flex flex-col gap-2 items-center ">
          {classes.paragraphs.map((paragraph) => (
            <div key={paragraph.id}>
              <Text size="m" variant={variant} text={paragraph.text} />
            </div>
          ))}
        </div>

        <div className="classes_grid">
          <SkinItem skin={skins.skin1} className={skins.skin1.className} />
          <SkinItem
            variant="bg-[#ff4739]"
            skin={skins.skin2}
            className={skins.skin2.className}
          />
          <SkinItem skin={skins.skin3} className={skins.skin3.className} />
          <SkinItem skin={skins.skin4} className={skins.skin4.className} />
          <SkinItem
            variant="bg-[#ff4739]"
            skin={skins.skin5}
            className={skins.skin5.className}
          />
          <SkinItem
            variant="bg-[#ff4739]"
            skin={skins.skin6}
            className={skins.skin6.className}
          />
          <SkinItem skin={skins.skin7} className={skins.skin7.className} />
        </div>
      </div>
    </Section>
  );
};

export default Classes;
