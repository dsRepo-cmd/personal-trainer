import { HeadingI, Variant } from "../../lib/types";
import Text from "../text/Text";

interface HeadingProps {
  className?: string;
  variant?: Variant;
  heading: HeadingI;
}

const Heading: React.FC<HeadingProps> = ({ variant = "dark", heading }) => {
  return (
    <>
      <div data-aos="fade-up">
        <Text
          variant={variant}
          className=" uppercase font-primary font-bold text-4xl"
          title={heading.title}
        />
      </div>

      <div
        data-aos="fade-up"
        className="flex flex-col gap-2 items-center text-center "
      >
        {heading.paragraphs &&
          heading.paragraphs.map((paragraph) => (
            <div key={paragraph.id}>
              <Text variant={variant} text={paragraph.text} />
            </div>
          ))}
      </div>
    </>
  );
};

export default Heading;
