import Heading from "../../components/heading/Heading";
import Section from "../../components/section/Section";
import Text from "../../components/text/Text";
import { footer } from "../../data/footer";
import type { Variant } from "../../lib/types";

interface FooterProps {
  className?: string;
  variant?: Variant;
}

const Footer: React.FC<FooterProps> = ({ variant = "dark" }) => {
  return (
    <Section id="footer" variant={variant}>
      <footer className=" flex flex-col justify-center items-center gap-10 w-full">
        <Heading variant={variant} heading={footer.heading} />
        <ul className=" flex gap-4">
          {footer.links.map((link, index) => (
            <li
              data-aos={"fade-up"}
              data-aos-duration={1000 + index * 200}
              key={link.id}
            >
              <a
                aria-label={link.title}
                title={link.title}
                href="#"
                className=" group flex rounded-[50%] p-4 bg-[#f4f4f4] cursor-pointer hover:fill-secondary "
              >
                {link.icon}
              </a>
            </li>
          ))}
        </ul>
        <div>
          <Text
            variant={variant}
            className=" text-sm"
            text={footer.copyright}
          />
        </div>
      </footer>
    </Section>
  );
};

export default Footer;
