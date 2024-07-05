import React, { useState, useEffect, useRef } from "react";
import Isotope from "isotope-layout";
import { MdPlayCircle } from "react-icons/md";
import Section from "../../components/section/Section";
import Text from "../../components/text/Text";
import Heading from "../../components/heading/Heading";
import Container from "../../components/container/Container";
import { portfolio } from "../../data/portfolio";
import { cn } from "../../lib/cn";
import type { Variant } from "../../lib/types";
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
      fitRows: { gutter: 20 },
      stagger: "0.05s",
      percentPosition: true,
    });

    setIsotope(iso);

    return () => {
      iso.reloadItems();
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
                "text-nowrap text-sm  w-40 px-5 py-6 md:w-[120px] bg-[#252525] hover:opacity-70 hover:text-primary",
                activeFilter === item.type ? " bg-[#2c2c2c] text-primary" : ""
              )}
              key={item.id}
            >
              {item.name}
            </button>
          ))}
        </div>

        <div
          ref={portfolioRef}
          className=" m-auto w-[1040px] lg:w-[700px]  md:w-[320px] "
        >
          {portfolio.portfolioItems.map((item) => (
            <div
              className={cn(" pt_item  ", item.types.join(" "))}
              key={item.id}
            >
              <div className=" group aspect-[6.5/4] flex flex-col items-center text-center ">
                <img
                  src={item.link}
                  alt={item.name}
                  className="  object-cover "
                />
                <a
                  aria-label={item.title}
                  href="#"
                  className={
                    " absolute top-0 left-1/2 translate-x-[-50%] opacity-0 group-hover:top-[20%] group-hover:opacity-100"
                  }
                >
                  <MdPlayCircle color="#fff" size={50} />
                </a>
                <div className=" absolute left-1/2 bottom-0 translate-x-[-50%] opacity-0 group-hover:bottom-[20%] group-hover:opacity-100 ">
                  <Text text={item.title} className="text-center text-sm" />
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
