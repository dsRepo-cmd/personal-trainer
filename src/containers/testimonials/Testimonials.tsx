import { FC } from "react";
import Heading from "../../components/heading/Heading";
import Section from "../../components/section/Section";
import { Variant } from "../../lib/types";
import { testimonials } from "../../data/testimonials";
import Text from "../../components/text/Text";
import "./Testimonials.css";

import Slider from "react-slick";

interface TestimonialsProps {
  className?: string;
  variant?: Variant;
}

const Testimonials: FC<TestimonialsProps> = ({ variant }) => {
  return (
    <Section variant={variant} id="testimonials">
      <div className="flex flex-col w-full gap-8 items-center justify-center overflow-hidden">
        <Heading variant={variant} heading={testimonials.heading} />
        <div className="image-slider-container">
          <Slider
            className=" w-full"
            dots
            autoplay
            autoplaySpeed={2000}
            pauseOnHover
            speed={1000}
            swipeToSlide
            slidesToScroll={1}
            slidesToShow={1}
            initialSlide={2}
            adaptiveHeight
          >
            {testimonials.list.map((item) => (
              <div className="" key={item.id}>
                <Text className=" mb-6" size="m" text={item.text} />
                <Text className=" mb-6" size="m" text={item.textBy} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;
