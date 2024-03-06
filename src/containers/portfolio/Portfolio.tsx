import Section from "../../components/section/Section";
import Text from "../../components/text/Text";
import "./Portfolio.css";
import { portfolioFilters, portfolioItems } from "../../data/portfolio";
import { MdPlayCircle } from "react-icons/md";

function Portfolio() {
  return (
    <Section doubleLine id="portfolio">
      <div className="flex w-full flex-col  gap-6 items-center justify-center">
        <Text
          title={"my Portfolio"}
          className="title container-dark uppercase"
        />
        <div className="flex  w-[600px] gap-[2px] items-center justify-center  md:flex-wrap">
          {portfolioFilters.map((item) => (
            <button
              className="w-full  bg-[#373737] hover:opacity-70"
              key={item.id}
            >
              <Text
                text={item.name}
                className=" py-5 text-nowrap  px-8 w-full"
              />
            </button>
          ))}
        </div>

        <div className=" grid grid-cols-3 w-full items-center gap-6 xl:grid-cols-2 md:flex md:flex-col  ">
          {portfolioItems.map((item) => (
            <div
              className="pt_item  relative w-[342px] h-[242px] overflow-hidden"
              key={item.id}
            >
              <img
                src={item.link}
                alt={item.name}
                className="pt_item_image w-full delay-200 h-full object-cover"
              />
              <button
                className={`pt_item_button absolute top-0 left-1/2 -translate-x-1/2 `}
              >
                <MdPlayCircle size={50} />
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
}

export default Portfolio;
