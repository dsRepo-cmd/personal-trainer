import { MdKeyboardArrowRight } from "react-icons/md";
import Section from "../../components/section/Section";
import Text from "../../components/text/Text";
import Heading from "../../components/heading/Heading";
import Button from "../../components/button/Button";
import Container from "../../components/container/Container";
import { pricing } from "../../data/pricing";
import type { Variant } from "../../lib/types";

interface PricingProps {
  className?: string;
  variant?: Variant;
}

const Pricing: React.FC<PricingProps> = ({ variant = "dark" }) => {
  return (
    <Section id="pricing">
      <Container>
        <Heading variant={variant} heading={pricing.heading} />

        <div className=" grid grid-cols-3 gap-9 w-full md:flex-col lg:grid-cols-2 sm:grid-cols-1">
          {pricing.plans.map((plan, index) => (
            <div
              data-aos="zoom-in"
              data-aos-duration={1000 + index * 500}
              className="flex flex-col gap-2 h-full w-full p-10 bg-[#222222]"
              key={plan.id}
            >
              <Text
                className="text-[2.8rem] uppercase font-bold text-primary"
                title={plan.price}
              />

              <Text
                className=" uppercase font-bold text-sm"
                text={plan.priceInfo}
              />

              <Text
                className="text-xl my-2 text-secondary uppercase font-bold font-primary"
                text={plan.type}
              />

              {plan.info.map((text, index) => (
                <div className=" border-b border-[#424242]" key={index}>
                  <div className="flex mb-3 items-center gap-1 ">
                    <MdKeyboardArrowRight className=" text-white" />
                    <Text
                      className=" text-[#e4e4e4] text-[0.8rem] "
                      text={text}
                    />
                  </div>
                </div>
              ))}

              <Button
                variant="secondary"
                className="mt-5 p-2 px-4 text-[0.7rem] uppercase "
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Pricing;
