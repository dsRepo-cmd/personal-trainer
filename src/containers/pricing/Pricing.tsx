import Section from "../../components/section/Section";
import Text from "../../components/text/Text";
import Heading from "../../components/heading/Heading";
import Button from "../../components/button/Button";
import Container from "../../components/container/Container";
import { pricing } from "../../data/pricing";
import { Variant } from "../../lib/types";
import { MdKeyboardArrowRight } from "react-icons/md";
import "./Pricing.css";

interface PricingProps {
  className?: string;
  variant?: Variant;
}

const Pricing: React.FC<PricingProps> = ({ variant = "dark" }) => {
  return (
    <Section id="pricing">
      <Container>
        <Heading variant={variant} heading={pricing.heading} />

        <div className="pr_wrapper  md:flex-col lg:grid-cols-2 sm:grid-cols-1">
          {pricing.plans.map((plan, index) => (
            <div
              data-aos="zoom-in"
              data-aos-duration={1000 + index * 500}
              className="flex flex-col gap-2 h-full w-full p-10 bg-[#222222]"
              key={plan.id}
            >
              <Text
                align="text-start"
                color="color_primary"
                uppercase
                bold
                className=" text-[2.8rem]"
                title={plan.price}
              />

              <Text align="text-start" uppercase bold text={plan.priceInfo} />

              <Text
                align="text-start"
                color="color_secondary"
                uppercase
                bold
                className="text-xl my-2"
                text={plan.type}
              />

              {plan.info.map((text, index) => (
                <div className="pr_divider" key={index}>
                  <div className="flex mb-3 items-center gap-1 ">
                    <MdKeyboardArrowRight className="pr_chevron_right" />
                    <Text
                      align="text-start"
                      className=" text-[#e4e4e4] text-[0.8rem] "
                      text={text}
                    />
                  </div>
                </div>
              ))}

              <Button variant="secondary" className="mt-5 p-2 px-4  ">
                <Text
                  className=" text-[0.7rem]"
                  uppercase
                  text={plan.buttonText}
                />
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Pricing;
