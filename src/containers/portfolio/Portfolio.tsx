import React, { useState, useEffect, useRef } from "react";
import Section from "../../components/section/Section";
import Text from "../../components/text/Text";
import Heading from "../../components/heading/Heading";
import Container from "../../components/container/Container";
import { portfolio } from "../../data/portfolio";
import { MdPlayCircle } from "react-icons/md";
import { Variant } from "../../lib/types";
import Isotope from "isotope-layout";
import "./Portfolio.css";

interface IntroProps {
  className?: string;
  variant?: Variant;
}

const Portfolio: React.FC<IntroProps> = ({ variant = "dark" }) => {
  const [isotope, setIsotope] = useState<Isotope | null>(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const portfolioRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isotope) {
      const filter = activeFilter === "all" ? "*" : `.${activeFilter}`;
      isotope.arrange({ filter: filter });
    }
  }, [isotope, activeFilter]);

  useEffect(() => {
    if (!portfolioRef.current) return;

    const iso = new Isotope(portfolioRef.current, {
      itemSelector: ".pt_item",
      layoutMode: "fitRows",
      containerStyle: {
        height: "100%",
        position: "relative",
      },
      fitRows: { gutter: 50 },
      stagger: "0.05s",
      percentPosition: true,
    });

    setIsotope(iso);

    return () => {
      iso.reloadItems();
      // iso.destroy();
    };
  }, []);

  const onChangeFilter = (slug: string) => {
    setActiveFilter(slug);
  };

  return (
    <Section doubleLine id="portfolio">
      <Container>
        <Heading variant={variant} heading={portfolio.heading} />

        <div className="pt_filter md:flex-wrap sm:w-[370px] ">
          {portfolio.portfolioFilters.map((item) => (
            <button
              onClick={() => onChangeFilter(item.type)}
              className={`pt_filter_button md:w-[120px] ${
                activeFilter === item.type ? " pt_filter_button-active" : ""
              }`}
              key={item.id}
            >
              <Text
                text={item.name}
                className={` text-nowrap pt_filter_button-text ${
                  activeFilter === item.type ? " pt_filter_button-active" : ""
                } `}
              />
            </button>
          ))}
        </div>

        <div ref={portfolioRef} className="pt_item_wrapper">
          {portfolio.portfolioItems.map((item) => (
            <div className={`${item.types.join(" ")} pt_item`} key={item.id}>
              <div className="pt_item_inner">
                <img
                  src={item.link}
                  alt={item.name}
                  className="pt_item_image"
                />
                <a href="#" className={"pt_item_link"}>
                  <MdPlayCircle color="#fff" size={50} />
                </a>
                <div className="pt_item_title">
                  <Text text={item.title} className="text-center" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Portfolio;
