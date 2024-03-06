import Section from "../../components/section/Section";
import SkinItem from "../../components/skin/Skin";

import Text from "../../components/text/Text";
import { classes } from "../../data/classes";
import "./Classes.css";

const { skins } = classes;

function Classes() {
  return (
    <Section id="classes" backgroundColor="white">
      <div className="flex flex-col gap-10 items-center justify-center">
        <Text className=" uppercase" title={classes.title} />

        <div className="flex flex-col gap-2 items-center ">
          {classes.paragraphs.map((paragraph) => (
            <div key={paragraph.id}>
              <Text text={paragraph.text} />
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
}

export default Classes;
