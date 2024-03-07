import Section from "../../components/section/Section";
import Text from "../../components/text/Text";
import { FC } from "react";
import { Variant } from "../../lib/types";
import { intro } from "../../data/intro";
import Heading from "../../components/heading/Heading";

interface IntroProps {
  className?: string;
  variant?: Variant;
}

const Intro: FC<IntroProps> = ({ variant = "dark" }) => {
  return (
    <Section backgroundColor={variant}>
      <div className="flex flex-col w-full gap-10 items-center justify-center">
        <Heading variant={variant} heading={intro.heading} />

        <div className="flex items-center justify-center gap-4 xl:grid grid-cols-2 sm:grid-cols-1 mt-10 ">
          {intro.blocks.map((block) => (
            <div
              key={block.id}
              className=" flex flex-col justify-center items-center gap-4 w-[300px]"
            >
              {block.icon}
              <Text
                variant={variant}
                size="m"
                bold
                uppercase
                text={block.title}
                className="text-[#62dc42]"
              />
              <Text variant={variant} text={block.text} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Intro;
