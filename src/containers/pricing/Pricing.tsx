import { FC } from "react";
import Section from "../../components/section/Section";
import Text from "../../components/text/Text";
import { pricing } from "../../data/pricing";
import { Variant } from "../../lib/types";
import Heading from "../../components/heading/Heading";

interface PricingProps {
  className?: string;
  variant?: Variant;
}

const Pricing: FC<PricingProps> = ({ variant = "dark" }) => {
  return (
    <Section id="pricing">
      <div className="flex flex-col w-full gap-10 items-center justify-center">
        <Heading variant={variant} heading={pricing.heading} />

        <div className=" flex items-center gap-9  w-full">
          {pricing.plans.map((plan) => (
            <div
              className="flex flex-col gap-2 h-full w-full p-10 bg-[#222222]"
              key={plan.id}
            >
              <Text
                align="text-start"
                className=" uppercase font-bold text-[#62dc42]"
                title={plan.price}
              />
              <Text
                align="text-start"
                className=" uppercase font-bold"
                text={plan.priceInfo}
              />
              <Text
                align="text-start"
                className=" uppercase font-bold text-[#ff4739] text-xl my-2"
                text={plan.type}
              />

              {plan.info.map((item, index) => (
                <div className=" border-b border-[#424242]" key={index}>
                  <Text
                    align="text-start"
                    className=" text-[#e4e4e4] text-[0.8rem] mb-3"
                    text={item}
                  />
                </div>
              ))}

              <button className=" self-start text-xs delay-50 rounded-sm uppercase mt-5 p-3 bg-[#ff4739] hover:bg-[#62dc42]">
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
