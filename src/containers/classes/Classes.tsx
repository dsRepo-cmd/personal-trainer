import Section from "../../components/section/Section";
import SkinItem from "../../components/skin/Skin";
import { classes } from "../../data/classes";
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

        <div className="grid grid-cols-12 gap-8 md:grid-cols-6 md:grid-rows-16 sm:flex sm:flex-wrap sm:justify-center">
          <SkinItem
            aspectRatio="530/320"
            skin={skins.skin1}
            className="col-span-6 row-span-4 md:col-span-6 md:row-span-4 sm:w-full"
          />
          <SkinItem
            aspectRatio="245/410"
            variant="bg-secondary"
            skin={skins.skin2}
            className="col-span-3 row-span-5 md:col-span-3 md:row-span-5 sm:w-full"
          />
          <SkinItem
            aspectRatio="245/320"
            skin={skins.skin3}
            className="col-span-3 row-span-4 md:col-span-3 md:row-span-4 sm:w-full"
          />
          <SkinItem
            aspectRatio="245/320"
            skin={skins.skin4}
            className="col-span-3 row-span-4 md:col-span-3 md:row-span-4 sm:w-full"
          />
          <SkinItem
            aspectRatio="245/320"
            variant="bg-secondary"
            skin={skins.skin5}
            className="col-span-3 row-span-4 md:col-span-3 md:row-span-4 sm:w-full"
          />
          <SkinItem
            aspectRatio="245/230"
            variant="bg-secondary"
            skin={skins.skin6}
            className="col-span-3 row-span-4 md:col-span-3 md:row-span-4 sm:w-full"
          />
          <SkinItem
            aspectRatio="245/320"
            skin={skins.skin7}
            className="col-span-3 row-span-3 md:col-span-3 md:row-span-3 sm:w-full"
          />
        </div>
      </Container>
    </Section>
  );
};

export default Classes;
