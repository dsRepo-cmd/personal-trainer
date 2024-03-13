import { ValidationError, useForm } from "@formspree/react";
import Container from "../../components/container/Container";
import Heading from "../../components/heading/Heading";
import Section from "../../components/section/Section";
import { contact } from "../../data/contact";
import { Variant } from "../../lib/types";
import Button from "../../components/button/Button";
import Text from "../../components/text/Text";
import "./Contact.css";

interface ContactProps {
  className?: string;
  variant?: Variant;
}

const Contact: React.FC<ContactProps> = ({ variant = "dark" }) => {
  const [state, handleSubmit] = useForm(contact.formspree);
  return (
    <Section id="contact" variant={variant}>
      <Container>
        <Heading variant={variant} heading={contact.heading} />

        <form className="form  md:w-[100%] mx-auto" onSubmit={handleSubmit}>
          <div className="form_wrapper sm:flex-col">
            <div className="form_input_wrapper">
              <input
                className="form_input"
                type="text"
                placeholder="YOUR NAME"
                name="name"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />

              <input
                className="form_input"
                type="email"
                placeholder="YOUR EMAIL"
                name="email"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />

              <input
                className="form_input"
                type="phone"
                placeholder="YOUR PHONE"
                name="phone"
              />
              <ValidationError
                prefix="Phone"
                field="phone"
                errors={state.errors}
              />
            </div>
            <div className="form_input_wrapper">
              <textarea
                className="form_input"
                rows={5}
                cols={50}
                placeholder="YOUR MASSAGE"
                name="message"
                id=""
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
          </div>
          <Button
            className=" contact_submit_button"
            disabled={state.submitting}
            variant="secondary"
          >
            <Text className=" text-[0.8rem]" uppercase text={"Send message"} />
          </Button>
          {state.succeeded && (
            <Text variant={variant} uppercase text={"Thanks for joining!"} />
          )}
        </form>
      </Container>
    </Section>
  );
};

export default Contact;
