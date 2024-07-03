import Section from "../../components/section/Section";
import SkinItem from "../../components/skin/Skin";
import { classes } from "../../data/classes";
import "./Classes.css";
import { Variant } from "../../lib/types";
import Heading from "../../components/heading/Heading";
import Container from "../../components/container/Container";
const { skins } = classes;

interface ClassesProps {
  className?: string;
  variant?: Variant;
}

const Classes: React.FC<ClassesProps> = ({ variant = "dark" }) => {
  return (
    <Section id="classes" variant={variant}>
      <Container>
        <Heading variant={variant} heading={classes.heading} />

        <div className="classes_grid">
          <SkinItem skin={skins.skin1} className={skins.skin1.className} />
          <SkinItem
            variant="bg-secondary"
            skin={skins.skin2}
            className={skins.skin2.className}
          />
          <SkinItem skin={skins.skin3} className={skins.skin3.className} />
          <SkinItem skin={skins.skin4} className={skins.skin4.className} />
          <SkinItem
            variant="bg-secondary"
            skin={skins.skin5}
            className={skins.skin5.className}
          />
          <SkinItem
            variant="bg-secondary"
            skin={skins.skin6}
            className={skins.skin6.className}
          />
          <SkinItem skin={skins.skin7} className={skins.skin7.className} />
        </div>
      </Container>
    </Section>
  );
};

export default Classes;
