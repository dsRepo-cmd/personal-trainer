import React, { useState, useCallback } from "react";
import Section from "../../components/section/Section";
import Text from "../../components/text/Text";
import Heading from "../../components/heading/Heading";
import Container from "../../components/container/Container";
import { portfolio } from "../../data/portfolio";
import { MdPlayCircle } from "react-icons/md";
import { Variant } from "../../lib/types";
import "./Portfolio.css";

interface IntroProps {
  className?: string;
  variant?: Variant;
}

const Portfolio: React.FC<IntroProps> = ({ variant = "dark" }) => {
  const [activeFilter, setActiveFilter] = useState("all");

  const onChangeFilter = useCallback((slug: string) => {
    setActiveFilter(slug);
  }, []);

  const filteredItems =
    activeFilter === "all"
      ? portfolio.portfolioItems
      : portfolio.portfolioItems.filter((item) =>
          item.type.includes(activeFilter)
        );

  return (
    <Section doubleLine id="portfolio">
      <Container>
        <Heading variant={variant} heading={portfolio.heading} />

        <div className="pt_filter md:flex-wrap sm:w-[370px]">
          {portfolio.portfolioFilters.map((item) => (
            <button
              onClick={() => onChangeFilter(item.slug)}
              className={`pt_filter_button md:w-[120px] ${
                activeFilter === item.slug ? " pt_filter_button-active" : ""
              }`}
              key={item.id}
            >
              <Text
                text={item.name}
                className={` text-nowrap pt_filter_button-text ${
                  activeFilter === item.slug ? " pt_filter_button-active" : ""
                } `}
              />
            </button>
          ))}
        </div>

        <div className="pt_item_wrapper xl:grid-cols-2 md:flex md:flex-col ">
          {filteredItems.map((item) => (
            <div className="pt_item" key={item.id}>
              <img src={item.link} alt={item.name} className="pt_item_image " />
              <a href="#" className={"pt_item_link"}>
                <MdPlayCircle color="#fff" size={50} />
              </a>
              <div className="pt_item_title ">
                <Text text={item.title} className="text-center" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Portfolio;
