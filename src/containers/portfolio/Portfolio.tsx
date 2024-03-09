import Section from "../../components/section/Section";
import Text from "../../components/text/Text";
import "./Portfolio.css";
import { portfolio } from "../../data/portfolio";
import { MdPlayCircle } from "react-icons/md";
import { FC } from "react";
import { Variant } from "../../lib/types";
import Heading from "../../components/heading/Heading";
interface IntroProps {
  className?: string;
  variant?: Variant;
}

const Portfolio: FC<IntroProps> = ({ variant = "dark" }) => {
  return (
    <Section doubleLine id="portfolio">
      <div className="flex flex-col w-full gap-10 items-center justify-center">
        <Heading variant={variant} heading={portfolio.heading} />

        <div className="flex  w-[600px] gap-[2px] items-center justify-center  md:flex-wrap sm:w-[370px]">
          {portfolio.portfolioFilters.map((item) => (
            <button
              className=" w-[150px]  py-5 px-8 bg-[#373737] hover:opacity-70 md:w-[120px]"
              key={item.id}
            >
              <Text text={item.name} className=" text-nowrap  " />
            </button>
          ))}
        </div>

        <div className=" grid grid-cols-3 w-full items-center justify-center  gap-6 xl:grid-cols-2 md:flex md:flex-col  ">
          {portfolio.portfolioItems.map((item) => (
            <div
              className="pt_item w-full  relative h-full overflow-hidden"
              key={item.id}
            >
              <img
                src={item.link}
                alt={item.name}
                className="pt_item_image w-full  h-full object-cover"
              />
              <button
                className={
                  "pt_item_button absolute  top-0 left-1/2 -translate-x-1/2"
                }
              >
                <MdPlayCircle color="#fff" size={50} />
              </button>
              <div
                className={`pt_item_title absolute bottom-0 left-1/2 -translate-x-1/2 `}
              >
                <Text text={item.title} className="text-center" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Portfolio;
