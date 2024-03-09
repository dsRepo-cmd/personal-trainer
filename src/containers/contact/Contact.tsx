import Container from "../../components/container/Container";
import Heading from "../../components/heading/Heading";
import Section from "../../components/section/Section";
import { contact } from "../../data/contact";
import { Variant } from "../../lib/types";
interface ContactProps {
  className?: string;
  variant?: Variant;
}

const Contact: React.FC<ContactProps> = ({ variant = "dark" }) => {
  return (
    <Section id="contact" variant={variant}>
      <Container>
        <Heading variant={variant} heading={contact.heading} />
      </Container>
    </Section>
  );
};

export default Contact;
