import { ValidationError, useForm } from "@formspree/react";
import Container from "../../components/container/Container";
import Heading from "../../components/heading/Heading";
import Section from "../../components/section/Section";
import { contact } from "../../data/contact";
import { Variant } from "../../lib/types";
import Button from "../../components/button/Button";
import Text from "../../components/text/Text";

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

        <form
          className=" flex flex-col justify-center items-center gap-5 w-full  md:w-[100%] mx-auto"
          onSubmit={handleSubmit}
        >
          <div className=" flex gap-5 w-full sm:flex-col">
            <div className=" flex flex-col w-full gap-8 text-sm">
              <input
                className=" px-3 py-[10px] w-full h-full text-[0.8rem] border-2 border-[#e4e4e4]"
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
                className=" px-3 py-[10px] w-full h-full text-[0.8rem] border-2 border-[#e4e4e4]"
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
                className=" px-3 py-[10px] w-full h-full text-[0.8rem] border-2 border-[#e4e4e4]"
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
            <div className="flex flex-col w-full gap-8 text-sm">
              <textarea
                className=" px-3 py-[10px] w-full h-full text-[0.8rem] border-2 border-[#e4e4e4]"
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
            className=" w-full h-full p-[18px] bg-secondary"
            disabled={state.submitting}
            variant="secondary"
          >
            <Text className=" text-[0.8rem] uppercase" text={"Send message"} />
          </Button>
          {state.succeeded && (
            <Text
              variant={variant}
              className=" uppercase"
              text={"Thanks for joining!"}
            />
          )}
        </form>
      </Container>
    </Section>
  );
};

export default Contact;
