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
      <div className="flex flex-col w-full gap-10 items-center justify-center">
        <Heading variant={variant} heading={contact.heading} />
      </div>
    </Section>
  );
};

export default Contact;
