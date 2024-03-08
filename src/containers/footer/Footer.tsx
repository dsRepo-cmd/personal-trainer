import Heading from "../../components/heading/Heading";
import Section from "../../components/section/Section";
import Text from "../../components/text/Text";
import { footer } from "../../data/footer";
import { Variant } from "../../lib/types";
import "./Footer.css";

interface FooterProps {
  className?: string;
  variant?: Variant;
}

const Footer: React.FC<FooterProps> = ({ variant = "dark" }) => {
  return (
    <Section id="footer" backgroundColor={variant}>
      <footer className="flex flex-col w-full gap-10 items-center justify-center">
        <Heading variant={variant} heading={footer.heading} />
        <ul className=" flex gap-4">
          {footer.links.map((link) => (
            <li key={link.id}>
              <a href="#" className="footer_link">
                {link.icon}
              </a>
            </li>
          ))}
        </ul>
        <div>
          <Text variant={variant} text={footer.copyright} />
        </div>
      </footer>
    </Section>
  );
};

export default Footer;
