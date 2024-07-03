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
import { cn } from "../../lib/cn";

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

        <div
          data-aos="fade-right"
          className="flex items-center justify-center w-[600px] gap-[2px] md:flex-wrap sm:w-[370px] "
        >
          {portfolio.portfolioFilters.map((item) => (
            <button
              onClick={() => onChangeFilter(item.type)}
              className={cn(
                " w-40 px-5 py-6 md:w-[120px] bg-[#252525] hover:opacity-70 hover:text-primary",
                activeFilter === item.type ? " bg-[#2c2c2c] text-primary" : ""
              )}
              key={item.id}
            >
              <Text
                text={item.name}
                className={` text-nowrap  text-primary hover:text-primary ${
                  activeFilter === item.type
                    ? " bg-[#2c2c2c] text-primary"
                    : " text-white"
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
                <a aria-label={item.title} href="#" className={"pt_item_link"}>
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
