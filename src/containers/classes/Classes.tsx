import Section from "../../components/section/Section";
import SkinItem from "../../components/skin/Skin";
import Heading from "../../components/heading/Heading";
import Container from "../../components/container/Container";
import { classes } from "../../data/classes";
import type { Variant } from "../../lib/types";

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

        <div className="grid grid-cols-12 gap-8 lg:grid-cols-6 lg:grid-rows-16 sm:flex sm:flex-wrap sm:justify-center">
          <SkinItem
            aspectRatio="530/320"
            skin={skins.skin1}
            className="col-span-6 row-span-4 lg:col-span-6 lg:row-span-4 sm:w-full"
          />
          <SkinItem
            aspectRatio="245/410"
            variant="bg-secondary"
            skin={skins.skin2}
            className="col-span-3 row-span-5 lg:col-span-3 lg:row-span-5 sm:w-full"
          />
          <SkinItem
            aspectRatio="245/320"
            skin={skins.skin3}
            className="col-span-3 row-span-4 lg:col-span-3 lg:row-span-4 sm:w-full"
          />
          <SkinItem
            aspectRatio="245/320"
            skin={skins.skin4}
            className="col-span-3 row-span-4 lg:col-span-3 lg:row-span-4 sm:w-full"
          />
          <SkinItem
            aspectRatio="245/320"
            variant="bg-secondary"
            skin={skins.skin5}
            className="col-span-3 row-span-4 lg:col-span-3 lg:row-span-4 sm:w-full"
          />
          <SkinItem
            aspectRatio="245/230"
            variant="bg-secondary"
            skin={skins.skin6}
            className="col-span-3 row-span-4 lg:col-span-3 lg:row-span-4 sm:w-full"
          />
          <SkinItem
            aspectRatio="245/320"
            skin={skins.skin7}
            className="col-span-3 row-span-3 lg:col-span-3 lg:row-span-3 sm:w-full"
          />
        </div>
      </Container>
    </Section>
  );
};

export default Classes;
