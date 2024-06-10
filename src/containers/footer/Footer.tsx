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
    <Section id="footer" variant={variant}>
      <footer className="footer">
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
                className="footer_link"
              >
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
