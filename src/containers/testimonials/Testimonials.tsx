import Heading from "../../components/heading/Heading";
import Section from "../../components/section/Section";
import Text from "../../components/text/Text";
import { testimonials } from "../../data/testimonials";
import type { Variant } from "../../lib/types";
import "./Testimonials.css";

import Slider from "react-slick";
import Container from "../../components/container/Container";

interface TestimonialsProps {
  className?: string;
  variant?: Variant;
}

const Testimonials = ({ variant }: TestimonialsProps) => {
  return (
    <Section variant={variant} id="testimonials">
      <Container className=" relative">
        <Heading variant={variant} heading={testimonials.heading} />
        <div className=" relative m-auto w-full  ">
          <Slider
            dots
            autoplay
            autoplaySpeed={2000}
            pauseOnHover
            speed={1000}
            swipeToSlide
            slidesToScroll={1}
            slidesToShow={1}
            initialSlide={0}
            arrows={false}
            draggable
            infinite
            customPaging={() => <div className="click_dote"></div>}
          >
            {testimonials.list.map((item) => (
              <div
                className=" cursor-grab active:cursor-grabbing"
                key={item.id}
              >
                <Text className=" mb-6 mx-5" text={item.text} />
                <Text className=" mb-6" text={item.textBy} />
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </Section>
  );
};

export default Testimonials;
