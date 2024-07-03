import Section from "../../components/section/Section";
import Text from "../../components/text/Text";
import { FC } from "react";
import { Variant } from "../../lib/types";
import { intro } from "../../data/intro";
import Heading from "../../components/heading/Heading";
import Container from "../../components/container/Container";

interface IntroProps {
  className?: string;
  variant?: Variant;
}

const Intro: FC<IntroProps> = ({ variant = "dark" }) => {
  return (
    <Section variant={variant}>
      <Container>
        <Heading variant={variant} heading={intro.heading} />

        <div className="flex items-center justify-center gap-4 xl:grid grid-cols-2 sm:grid-cols-1 mt-10 ">
          {intro.blocks.map((block) => (
            <div
              data-aos="zoom-in"
              key={block.id}
              className=" flex flex-col justify-center items-center gap-4 w-[300px] md:w-full"
            >
              {block.icon}
              <Text
                variant={variant}
                size="m"
                text={block.title}
                className=" text-primary font-bold uppercase"
              />
              <Text size="s" variant={variant} text={block.text} />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Intro;
